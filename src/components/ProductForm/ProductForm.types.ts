import { TextInput } from "react-native";

export interface ProductFormProps {}

export interface FormInputRef {
  id: TextInput | null;
  name: TextInput | null;
  description: TextInput | null;
  logo: TextInput | null;
  dateRelease: TextInput | null;
  dateRevision: TextInput | null;
}

export type InputRefKeys = keyof FormInputRef;
