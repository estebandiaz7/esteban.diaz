import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const { border, gray54, black } = colors;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: border,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    padding: 12,
  },
  id: {
    color: gray54,
    fontSize: 12,
  },
  name: {
    color: black,
    fontSize: 13,
    paddingBottom: 4,
  },
});

export default styles;
