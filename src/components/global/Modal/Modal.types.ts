import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
