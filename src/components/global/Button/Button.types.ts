import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  buttonType?: ButtonType;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export type ButtonType = "primary" | "action" | "delete";
