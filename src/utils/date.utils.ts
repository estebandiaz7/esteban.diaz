import dayjs from "dayjs";

export const formatInputDate = (oldDate: string, newDate: string) => {
  let cleaned = "";

  // Ensure the string is no longer than 8 characters
  if (newDate.length === 8) {
    // Remove any non-digit characters
    cleaned = newDate.replace(/[^0-9]/g, "");
    cleaned = cleaned.slice(0, 8);

    // Format the string as DD/MM/YYYY
    if (cleaned.length >= 3 && cleaned.length <= 4) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length > 4 && cleaned.length <= 6) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(
        4
      )}`;
    } else if (cleaned.length > 6) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(
        4,
        8
      )}`;
    }
  } else {
    return newDate;
  }

  return cleaned;
};

export const formatDate = (date?: string) => {
  if (!date) return "";
  return dayjs(date).format("DD/MM/YYYY");
};

export const formatFrontendDateToBackend = (frontDate: string) => {
  const backendDate = dayjs(frontDate, "DD/MM/YYYY").format("YYYY-MM-DD");
  return backendDate;
};

export const formatBackendDateToFrontend = (backendDate: string) => {
  const frontendDate = dayjs(backendDate, "YYYY-MM-DD").format("DD/MM/YYYY");
  return frontendDate;
};
