import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./ProductForm.styles";
import { ProductFormProps as Props } from "./ProductForm.types";
import Button from "../global/Button/Button";
import useProductStore from "../../stores/product.store";
import { isAndroid, isiOS } from "../../utils/common.utils";
import { newProductFormSchema } from "../../utils/form.utils";
import TextBox from "../global/Textbox/Textbox";
import { NewProductFormValues } from "../../types/form.types";
import { verifyProductId } from "../../services/finance.service";
import { formatDate } from "../../utils/date.utils";

const ProductForm: React.FC<Props> = (props) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const newProductMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(newProductFormSchema()),
  });
  const updateProductMethods = useForm({
    mode: "onChange",
    // resolver: yupResolver(),
    // defaultValues: {},
  });

  const formMethods = selectedProduct
    ? updateProductMethods
    : newProductMethods;
  const method = selectedProduct ? "PUT" : "POST";
  const { handleSubmit, clearErrors, reset, setError } = formMethods;
  const titleText = selectedProduct
    ? "Formulario de edición"
    : "Formulario de registro";

  const createProduct = async (form: NewProductFormValues) => {
    const { id } = form;

    if (!(await verifyProductId(id))) {
      console.log("ID válido");
    } else {
      setError("id", {
        message: "ID inválido",
      });
    }
  };

  const submitHandler = (form: NewProductFormValues | any) => {
    if (method === "POST") createProduct(form);
    // if (method === "PUT") updateProduct(form);
  };

  const resetForm = () => {
    clearErrors();
    reset();
  };

  const renderForm = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <FormProvider {...formMethods}>
          <View style={styles.formContainer}>
            <View style={styles.top}>
              <Text>{titleText}</Text>
              <TextBox
                label="ID"
                name="id"
                returnKeyType="next"
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
              <TextBox
                label="Nombre"
                name="name"
                returnKeyType="next"
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
              <TextBox
                label="Descripción"
                name="description"
                returnKeyType="next"
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
              <TextBox
                label="Logo"
                name="logo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
              <TextBox
                label="Fecha Liberación"
                name="dateRelease"
                returnKeyType="next"
                maxLength={10}
                formatter={formatDate}
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
              <TextBox
                label="Fecha Revisión"
                name="dateRevision"
                returnKeyType="next"
                maxLength={10}
                formatter={formatDate}
                onSubmitEditing={() => {
                  // else focusNextField("email");
                }}
              />
            </View>
            <View style={styles.bottom}>
              <Button title="Enviar" onPress={handleSubmit(submitHandler)} />
              <Button
                title="Reiniciar"
                buttonType="action"
                onPress={resetForm}
                buttonStyle={styles.resetButton}
              />
            </View>
          </View>
        </FormProvider>
      </ScrollView>
    );
  };

  return (
    <>
      {isAndroid ? renderForm() : null}
      {isiOS ? (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120}>
          {renderForm()}
        </KeyboardAvoidingView>
      ) : null}
    </>
  );
};

export default ProductForm;
