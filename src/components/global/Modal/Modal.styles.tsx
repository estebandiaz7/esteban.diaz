import { StyleSheet } from "react-native";

import colors from "../../../config/colors";

const { backdrop, white, border } = colors;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: backdrop,
  },
  modalContainer: {
    justifyContent: "flex-end",
  },
  modalContent: {
    paddingBottom: 32,
    backgroundColor: white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: border,
  },
  question: {
    paddingHorizontal: 16,
    paddingVertical: 48,
    borderBottomWidth: 1,
    borderBottomColor: border,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    flexDirection: "column",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  cancel: {
    marginTop: 16,
  },
});

export default styles;
