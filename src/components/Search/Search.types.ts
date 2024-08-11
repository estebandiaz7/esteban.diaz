import { Dispatch, SetStateAction } from "react";

export interface SearchProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}
