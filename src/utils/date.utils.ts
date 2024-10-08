import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import CONSTANTS from "config/constants";

dayjs.extend(customParseFormat);

const { FRONTEND_DATE_FORMAT, BACKEND_DATE_FORMAT } = CONSTANTS;

export const formatInputDate = (oldDate: string, newDate: string) => {
  // Remove any non-digit characters
  let cleaned = newDate.replace(/\D/g, "");

  // Ensure the string is no longer than 8 characters
  cleaned = cleaned.slice(0, 8);

  // Format the string as DD/MM/YYYY
  let formattedDate = cleaned;
  if (cleaned.length >= 3 && cleaned.length <= 4) {
    formattedDate = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  } else if (cleaned.length > 4 && cleaned.length <= 6) {
    formattedDate = `${cleaned.slice(0, 2)}/${cleaned.slice(
      2,
      4
    )}/${cleaned.slice(4)}`;
  } else if (cleaned.length > 6) {
    formattedDate = `${cleaned.slice(0, 2)}/${cleaned.slice(
      2,
      4
    )}/${cleaned.slice(4, 8)}`;
  }

  return formattedDate;
};

export const formatDate = (date?: string) => {
  if (!date) return "";
  return dayjs(date, BACKEND_DATE_FORMAT).format(FRONTEND_DATE_FORMAT);
};

export const formatFrontendDateToBackend = (frontDate: string) => {
  const backendDate = dayjs(frontDate, FRONTEND_DATE_FORMAT).format(
    BACKEND_DATE_FORMAT
  );
  return backendDate;
};

export const formatBackendDateToFrontend = (backendDate: string) => {
  const frontendDate = dayjs(backendDate, BACKEND_DATE_FORMAT).format(
    FRONTEND_DATE_FORMAT
  );
  return frontendDate;
};
