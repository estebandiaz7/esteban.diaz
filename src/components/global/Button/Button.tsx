import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";
import { getBackgroundColorByButtonType } from "./Button.helpers";
import { getTextColorByButtonType } from "./Button.helpers";

const Button: React.FC<Props> = (props) => {
  const { title, buttonStyle, textStyle, buttonType, onPress } = props;
  const backgroundColor = useMemo(
    () => getBackgroundColorByButtonType(buttonType),
    [buttonType]
  );
  const color = useMemo(
    () => getTextColorByButtonType(buttonType),
    [buttonType]
  );

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
