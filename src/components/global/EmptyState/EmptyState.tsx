import React from "react";
import { View, Text } from "react-native";

import styles from "./EmptyState.styles";
import { EmptyStateProps as Props } from "./EmptyState.types";

import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../Button/Button";

const EmptyState: React.FC<Props> = (props) => {
  const { style, image, title, onPress } = props;
  const customText = title ? title : "No existen datos";

  return (
    <View style={[styles.container, style]}>
      {image ? image : <AntDesign name="unknowfile1" size={40} color="black" />}
      <Text style={styles.emptyText}>{customText}</Text>
      {onPress ? <Button title="Volver a intentar" onPress={onPress} /> : null}
    </View>
  );
};

export default EmptyState;
