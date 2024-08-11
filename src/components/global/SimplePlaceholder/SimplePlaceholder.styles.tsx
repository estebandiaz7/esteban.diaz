import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const { border, white, gray80, gray90 } = colors;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: "100%",
    backgroundColor: white,
    borderColor: border,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
  },
  name: {
    height: 8,
    width: "50%",
    backgroundColor: gray80,
  },
  id: {
    height: 12,
    width: "30%",
    backgroundColor: gray90,
  },
});

export default styles;
