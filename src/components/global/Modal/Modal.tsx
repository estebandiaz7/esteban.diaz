import React from "react";
import { TouchableOpacity } from "react-native";
import { Modal as ReactNativeModal, View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { ModalProps as Props } from "./Modal.types";
import styles from "./Modal.styles";
import useProductStore from "../../../stores/product.store";
import Button from "../Button/Button";

const Modal: React.FC<Props> = (props) => {
  const { modalVisible, setModalVisible } = props;
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const { name } = selectedProduct ?? {};
  const question = `¿Está seguro que desea eliminar ${name}?`;

  const toggleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  const onDelete = async () => {};

  return (
    <>
      {modalVisible ? (
        <ReactNativeModal
          transparent
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModalVisible}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={toggleModalVisible}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.closeButton}>
                <TouchableOpacity onPress={toggleModalVisible}>
                  <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.question}>
                <Text style={styles.modalText} numberOfLines={3}>
                  {question}
                </Text>
              </View>
              <View style={styles.footer}>
                <Button title="Confirmar" onPress={onDelete} />
                <Button
                  title="Cancelar"
                  buttonType="action"
                  onPress={toggleModalVisible}
                  buttonStyle={styles.cancel}
                />
              </View>
            </View>
          </View>
        </ReactNativeModal>
      ) : null}
    </>
  );
};

export default Modal;
