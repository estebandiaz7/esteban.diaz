import React from "react";
import { forwardRef } from "react";
import { useController, useFormState } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { View, Text, TextInput, ActivityIndicator } from "react-native";

import styles from "./Textbox.styles";
import { TextBoxProps as Props } from "./Textbox.types";

const TextBox = forwardRef<TextInput, Props>((props, ref) => {
  const { name, label, rules, defaultValue, keyboardType, placeholder } = props;
  const { returnKeyType, editable = true, showLoader } = props;
  const { onSubmitEditing = () => {}, formatter } = props;

  const formContext = useFormContext();
  const { errors } = useFormState();
  const { field } = useController({ name, rules, defaultValue });

  const { onBlur, value } = field;
  const error = errors[name];
  const message = error?.message;
  const disabledStyle = !editable ? styles.disabled : null;

  const onChangeText = (text: string) => {
    const formatted = formatter ? formatter(field.value, text) : text;
    field.onChange(formatted);
  };

  if (!formContext || !name) return null;

  const labelComponent = label ? (
    <Text style={[styles.label]}>{label}</Text>
  ) : null;

  const showLoaderComponent = <ActivityIndicator size="small" />;

  return (
    <View style={[styles.wrapper, disabledStyle]}>
      <View style={styles.labelContainer}>{labelComponent}</View>
      <TextInput
        ref={ref}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.textBox}
        onBlur={onBlur}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
        underlineColorAndroid="transparent"
      />
      {showLoader ? showLoaderComponent : null}
      {message ? <Text style={styles.error}>{`${message}`}</Text> : null}
    </View>
  );
});

TextBox.displayName = "Textbox";

export default TextBox;
