import { ProductFormValues } from "types/form.types";
import { FinanceProduct } from "types/product.types";
import { formatFrontendDateToBackend } from "./date.utils";

export const transformProductByForm = (
  form: ProductFormValues
): FinanceProduct => {
  const { dateRelease, dateRevision, description, id, logo, name } = form;

  return {
    id,
    name,
    description,
    logo,
    date_release: formatFrontendDateToBackend(dateRelease),
    date_revision: formatFrontendDateToBackend(dateRevision),
  };
};
