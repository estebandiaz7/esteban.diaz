import colors from "../../../config/colors";
import { ButtonType } from "./Button.types";

const { primary, gray93, red, white, blue } = colors;

export const getBackgroundColorByButtonType = (buttonType?: ButtonType) => {
  switch (buttonType) {
    case "primary":
      return primary;
    case "action":
      return gray93;
    case "delete":
      return red;
    default:
      return primary;
  }
};

export const getTextColorByButtonType = (buttonType?: ButtonType) => {
  switch (buttonType) {
    case "primary":
      return blue;
    case "action":
      return blue;
    case "delete":
      return white;
    default:
      return blue;
  }
};
