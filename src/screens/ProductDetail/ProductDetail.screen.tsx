import React from "react";
import { View } from "react-native";

import styles from "./ProductDetail.screen.styles";
import { ProductDetailProps as Props } from "./ProductDetail.screen.types";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetailScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <ProductDetail />
    </View>
  );
};

export default ProductDetailScreen;
