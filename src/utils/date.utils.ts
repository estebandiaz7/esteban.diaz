export const formatDate = (oldDate: string, newDate: string) => {
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
