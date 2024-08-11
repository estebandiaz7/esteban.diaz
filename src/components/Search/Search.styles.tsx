import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const { border } = colors;

const styles = StyleSheet.create({
  search: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderRadius: 4,
    borderColor: border,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  input: {
    paddingVertical: 8,
    flex: 1,
  },
});

export default styles;
