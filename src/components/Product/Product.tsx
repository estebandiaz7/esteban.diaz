import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import styles from "./Product.styles";
import { ProductProps as Props } from "./Product.types";
import useProductStore from "stores/product.store";
import { RootNavigatorPropList } from "navigation/Navigator.types";

const Product: React.FC<Props> = (props) => {
  const { product } = props;
  const { id, name } = product;
  const { navigate } = useNavigation<RootNavigatorPropList>();
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );

  const onPress = () => {
    setSelectedProduct(product);
    navigate("ProductDetail");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>{`ID: ${id}`}</Text>
      </View>
      <View style={styles.icon}>
        <AntDesign name="right" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Product;
