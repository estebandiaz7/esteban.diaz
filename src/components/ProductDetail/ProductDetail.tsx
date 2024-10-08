import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { NativeSyntheticEvent, ImageErrorEventData } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./ProductDetail.styles";
import { ProductDetailProps as Props } from "./ProductDetail.types";
import useProductStore from "stores/product.store";
import { RootNavigatorPropList } from "navigation/Navigator.types";
import { formatDate } from "utils/date.utils";
import Button from "components/global/Button/Button";
import Modal from "components/global/Modal/Modal";

const ProductDetail: React.FC<Props> = (props) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const { id, name, date_release, date_revision } = selectedProduct ?? {};
  const { description, logo } = selectedProduct ?? {};
  const [modalVisible, setModalVisible] = useState(false);
  const [imageErrorMessage, setImageErrorMessage] = useState("");
  const { navigate } = useNavigation<RootNavigatorPropList>();

  const renderItem = (title?: string, content?: string) => {
    return (
      <View style={styles.item}>
        {title ? (
          <View>
            <Text style={styles.common}>{title}</Text>
          </View>
        ) : null}
        {content ? (
          <View style={styles.rightContent}>
            <Text style={styles.content}>{content}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const onEdit = () => {
    navigate("ProductForm");
  };

  const onErrorImage = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    const { error } = e.nativeEvent;
    setImageErrorMessage(error);
  };

  return (
    <>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.top}>
            <Text style={styles.id}>{`ID: ${id}`}</Text>
            <Text style={styles.common}>Información extra</Text>
          </View>
          <View>
            {renderItem("Nombre", name)}
            {renderItem("Descripción", description)}
            {logo ? (
              <View style={styles.imageContainer}>
                {renderItem("Logo")}
                {logo && !imageErrorMessage ? (
                  <Image
                    src={logo}
                    style={styles.image}
                    resizeMode="contain"
                    onError={onErrorImage}
                  />
                ) : null}
                {imageErrorMessage ? (
                  <Text style={styles.imageError}>{imageErrorMessage}</Text>
                ) : null}
              </View>
            ) : null}
            {renderItem("Fecha liberación", formatDate(date_release))}
            {renderItem("Fecha revisión", formatDate(date_revision))}
          </View>
        </View>
        <View style={styles.footer}>
          <Button title="Editar" onPress={onEdit} buttonType="action" />
          <Button
            title="Eliminar"
            onPress={() => setModalVisible((prev) => !prev)}
            buttonType="delete"
          />
        </View>
      </ScrollView>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default ProductDetail;
