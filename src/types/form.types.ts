import { FinanceProduct } from "./product.types";

export interface ProductFormValues
  extends Omit<FinanceProduct, "date_release" | "date_revision"> {
  dateRelease: string;
  dateRevision: string;
}
