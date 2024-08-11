import * as yup from "yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import CONSTANTS from "config/constants";

dayjs.extend(customParseFormat);

const { FRONTEND_DATE_FORMAT, ID_MAX_LENGTH, ID_MIN_LENGTH } = CONSTANTS;
const { NAME_MAX_LENGTH, NAME_MIN_LENGTH } = CONSTANTS;
const { DESCRIPTION_MAX_LENGTH, DESCRIPTION_MIN_LENGTH } = CONSTANTS;

const requiredStringMessage = "Campo requerido";
const requiredStringRule = yup.string().required(requiredStringMessage);
const minLengthMessage = (min: number) =>
  `Debe tener al menos ${min} caracteres`;
const maxLengthMessage = (max: number) =>
  `Debe tener menos de ${max} caracteres`;

export const getProductFormSchema = () => {
  return yup.object().shape({
    id: yup
      .string()
      .required(requiredStringMessage)
      .min(ID_MIN_LENGTH, minLengthMessage(ID_MIN_LENGTH))
      .max(ID_MAX_LENGTH, maxLengthMessage(ID_MAX_LENGTH)),
    name: yup
      .string()
      .required(requiredStringMessage)
      .min(NAME_MIN_LENGTH, minLengthMessage(NAME_MIN_LENGTH))
      .max(NAME_MAX_LENGTH, maxLengthMessage(NAME_MAX_LENGTH)),
    description: yup
      .string()
      .required(requiredStringMessage)
      .min(DESCRIPTION_MIN_LENGTH, minLengthMessage(DESCRIPTION_MIN_LENGTH))
      .max(DESCRIPTION_MAX_LENGTH, maxLengthMessage(DESCRIPTION_MAX_LENGTH)),
    logo: requiredStringRule,
    dateRelease: yup
      .string()
      .required(requiredStringMessage)
      .test(
        "dateRelease",
        "La fecha debe ser igual o mayor a la fecha actual",
        (date) => {
          const isSameDay = dayjs(date, FRONTEND_DATE_FORMAT).isSame(
            dayjs(),
            "day"
          );
          const isAfter = dayjs(date, FRONTEND_DATE_FORMAT).isAfter(
            dayjs(),
            "day"
          );
          return isAfter || isSameDay;
        }
      ),
    dateRevision: yup
      .string()
      .required(requiredStringMessage)
      .test(
        "dateRevision",
        "La fecha debe ser exactamente un año posterior a la fecha de liberación",
        function (date) {
          const dateRelease = this.parent.dateRelease;
          console.log({ dateRelease, date });
          const isExactlyOneYearAfter = dayjs(dateRelease, FRONTEND_DATE_FORMAT)
            .add(1, "year")
            .isSame(dayjs(date, FRONTEND_DATE_FORMAT), "day");
          return isExactlyOneYearAfter;
        }
      ),
  });
};
