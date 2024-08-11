import { UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface TextBoxProps
  extends UseControllerProps,
    Omit<TextInputProps, "defaultValue"> {
  label: string;
  formatter?: (oldValue: string, newValue: string) => string;
}
