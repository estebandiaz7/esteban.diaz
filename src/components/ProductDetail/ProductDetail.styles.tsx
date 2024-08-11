import { StyleSheet } from "react-native";

import colors from "config/colors";

const { gray54, black, red } = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  id: {
    fontSize: 22,
    color: black,
    paddingBottom: 4,
    fontWeight: "bold",
  },
  common: {
    fontSize: 14,
    color: gray54,
  },
  content: {
    fontSize: 14,
    color: black,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  item: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingLeft: 12,
  },
  rightContent: {
    width: "50%",
  },
  top: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 16,
    width: 200,
    height: 120,
  },
  footer: {
    justifyContent: "space-evenly",
    flex: 0.5,
  },
  imageError: {
    fontSize: 14,
    color: red,
  },
});

export default styles;
