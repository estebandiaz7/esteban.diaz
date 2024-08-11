import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const { black, primary, white } = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  emptyText: {
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: primary,
  },
  buttonText: {
    color: black,
    fontSize: 14,
  },
});

export default styles;
