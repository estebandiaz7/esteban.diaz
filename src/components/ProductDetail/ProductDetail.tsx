import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import styles from "./ProductDetail.styles";
import { ProductDetailProps as Props } from "./ProductDetail.types";
import useProductStore from "../../stores/product.store";
import Modal from "../global/Modal/Modal";
import Button from "../global/Button/Button";

const ProductDetail: React.FC<Props> = (props) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const { id, name, date_release, date_revision } = selectedProduct ?? {};
  const { description, logo } = selectedProduct ?? {};
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = (title?: string, content?: string) => {
    if (!title || !content) return null;

    return (
      <View style={styles.item}>
        <Text style={styles.common}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  };

  const onEdit = async () => {};

  return (
    <>
      <View style={styles.container}>
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
                <View style={styles.item}>
                  <Text style={styles.common}>Logo</Text>
                </View>
                <Image src={logo} style={styles.image} />
              </View>
            ) : null}
            {renderItem("Fecha liberación", date_release)}
            {renderItem("Fecha revisión", date_revision)}
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
      </View>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default ProductDetail;
