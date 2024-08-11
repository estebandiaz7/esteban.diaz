import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const { red, border } = colors;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  labelContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textBox: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: border,
  },
  error: {
    color: red,
    fontSize: 12,
    marginTop: 4,
    paddingLeft: 10,
  },
  disabled: {
    opacity: 0.4,
  },
});

export default styles;
