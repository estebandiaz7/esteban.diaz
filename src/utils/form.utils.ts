import * as yup from "yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { FormShape, NewProductFormValues } from "../types/form.types";

dayjs.extend(customParseFormat);

export const validationMessages = {
  required: "Campo requerido",
  minLength: (min: number) => `Debe tener al menos ${min} caracteres`,
  maxLength: (max: number) => `Debe tener menos de ${max} caracteres`,
};

const { required, maxLength, minLength } = validationMessages;

export const validationRules = {
  requiredString: yup.string().required(required),
  minLength: (min: number) =>
    yup.string().required(required).min(min, minLength(min)),
  maxLength: (max: number) =>
    yup.string().required(required).min(max, maxLength(max)),
};

const { requiredString } = validationRules;

export const newProductFormSchema = () =>
  yup.object().shape<FormShape<NewProductFormValues>>({
    id: yup
      .string()
      .required(required)
      .min(3, minLength(3))
      .max(10, maxLength(10)),
    name: yup
      .string()
      .required(required)
      .min(5, minLength(5))
      .max(100, maxLength(100)),
    description: yup
      .string()
      .required(required)
      .min(10, minLength(10))
      .max(200, maxLength(200)),
    logo: requiredString,
    dateRelease: yup
      .string()
      .required(required)
      .test("dateRelease", "Fecha inválida", (date) => {
        const isAfter = dayjs(date, "DD/MM/YYYY").isAfter(dayjs(), "day");
        return isAfter;
      }),
    dateRevision: yup
      .string()
      .required(required)
      .test("dateRelease", "date revision message", (date) => {
        const isAfter = dayjs(date, "DD/MM/YYYY").isAfter(
          dayjs().add(1, "year"),
          "day"
        );
        return isAfter;
      }),
  });
