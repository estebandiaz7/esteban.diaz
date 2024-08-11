import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import { TextInputSubmitEditingEventData } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import styles from "./Search.styles";
import { SearchProps as Props } from "./Search.types";

const Search: React.FC<Props> = (props) => {
  const { text, setText } = props;

  const onSubmitEditing = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    const text = e.nativeEvent.text;
    setText(text);
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        returnKeyType="search"
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit
        autoCapitalize="none"
        placeholder="Buscar..."
      />
      {text.length > 0 ? (
        <TouchableOpacity onPress={() => setText("")}>
          <Feather name="x" size={16} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Search;
