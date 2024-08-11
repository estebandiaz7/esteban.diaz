import { FinanceProduct } from "types/product.types";
import { FormInputRef } from "./ProductForm.types";
import { ProductFormValues } from "types/form.types";
import { formatBackendDateToFrontend } from "utils/date.utils";

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

export const getDefaultValues = (
  selectedProduct?: FinanceProduct
): ProductFormValues => {
  const { date_release, date_revision, description } = selectedProduct ?? {};
  const { name, logo, id } = selectedProduct ?? {};
  return {
    dateRelease: date_release ? formatBackendDateToFrontend(date_release) : "",
    dateRevision: date_revision
      ? formatBackendDateToFrontend(date_revision)
      : "",
    description: description ?? "",
    id: id ?? "",
    logo: logo ?? "",
    name: name ?? "",
  };
};
