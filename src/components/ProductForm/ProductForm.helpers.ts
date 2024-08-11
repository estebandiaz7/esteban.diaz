import { NewProductFormValues } from "../../types/form.types";
import { FormInputRef } from "./ProductForm.types";

export const getDefaultValuesForRef = (): FormInputRef => {
  return {
    dateRelease: null,
    dateRevision: null,
    description: null,
    id: null,
    logo: null,
    name: null,
  };
};

export const newProductFormDefaultValues: NewProductFormValues = {
  dateRelease: "",
  dateRevision: "",
  description: "",
  id: "",
  logo: "",
  name: "",
};
