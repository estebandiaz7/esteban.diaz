import React from "react";
import { View } from "react-native";

import styles from "./ProductForm.screen.styles";
import { ProductFormProps as Props } from "./ProductForm.screen.types";
import ProductForm from "../../components/ProductForm/ProductForm";

const ProductFormScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <ProductForm />
    </View>
  );
};

export default ProductFormScreen;
