// Interfaces and types from component TextBox

import { UseControllerProps } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface TextBoxProps
  extends UseControllerProps,
    Omit<TextInputProps, "defaultValue"> {
  label: string;
  formatter?: (oldValue: string, newValue: string) => string;
}

export type TextBoxType = "password" | "email" | "number" | "text";
export type CapitalizeType = "none" | "sentences" | "words" | "characters";
