import { AnySchema } from "yup";

export type FormShape<T> = Partial<Record<keyof T, AnySchema>>;

export interface NewProductFormValues {
  id: string;
  name: string;
  description: string;
  logo: string;
  dateRelease: string;
  dateRevision: string;
}
