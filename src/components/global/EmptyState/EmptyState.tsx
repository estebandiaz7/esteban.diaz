import React from "react";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import styles from "./EmptyState.styles";
import { EmptyStateProps as Props } from "./EmptyState.types";
import Button from "components/global/Button/Button";

const EmptyState: React.FC<Props> = (props) => {
  const { style, image, title, onPress } = props;
  const customText = title ?? "No existen datos";

  return (
    <View style={[styles.container, style]}>
      {image || <AntDesign name="unknowfile1" size={40} color="black" />}
      <Text style={styles.emptyText}>{customText}</Text>
      {onPress ? <Button title="Volver a intentar" onPress={onPress} /> : null}
    </View>
  );
};

export default EmptyState;
