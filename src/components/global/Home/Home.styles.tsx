import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const { border, white } = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    marginTop: 24,
    height: "88%",
    borderRadius: 8,
    backgroundColor: white,
    borderColor: border,
    borderWidth: 1,
  },
  placeholder: {
    flex: 1,
    width: "100%",
  },
});

export default styles;
