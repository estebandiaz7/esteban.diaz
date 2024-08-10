import React from "react";
import { View } from "react-native";

import styles from "./SimplePlaceholder.styles";
import { SimplePlaceholderProps as Props } from "./SimplePlaceholder.types";

const SimplePlaceholder: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.name} />
      <View style={styles.id} />
    </View>
  );
};

export default SimplePlaceholder;
