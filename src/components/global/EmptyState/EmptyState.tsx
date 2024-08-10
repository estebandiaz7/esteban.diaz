import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./EmptyState.styles";
import { EmptyStateProps as Props } from "./EmptyState.types";

import AntDesign from "@expo/vector-icons/AntDesign";

const EmptyState: React.FC<Props> = (props) => {
  const { style, image, title, onPress } = props;
  const customText = title ? title : "No existen datos";

  return (
    <View style={[styles.container, style]}>
      {image ? image : <AntDesign name="unknowfile1" size={40} color="black" />}
      <Text style={styles.emptyText}>{customText}</Text>
      {onPress ? (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default EmptyState;
