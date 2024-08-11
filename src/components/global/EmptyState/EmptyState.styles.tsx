import { StyleSheet } from "react-native";

import colors from "config/colors";

const { white } = colors;

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
});

export default styles;
