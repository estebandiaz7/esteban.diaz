import { StyleProp, ViewStyle } from "react-native";

export interface EmptyStateProps {
  style?: StyleProp<ViewStyle>;
  image?: JSX.Element;
  title?: string;
  onPress?: () => void;
}
