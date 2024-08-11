import React, { useRef } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import styles from "./ProductForm.styles";
import { FormInputRef, InputRefKeys } from "./ProductForm.types";
import { ProductFormProps as Props } from "./ProductForm.types";
import Button from "../global/Button/Button";
import useProductStore from "../../stores/product.store";
import { isAndroid, isiOS } from "../../utils/common.utils";
import { newProductFormSchema } from "../../utils/form.utils";
import TextBox from "../global/Textbox/Textbox";
import { NewProductFormValues } from "../../types/form.types";
import { formatInputDate } from "../../utils/date.utils";
import { useCreateProduct } from "../../services/finance.service.hooks";
import { useUpdateProduct } from "../../services/finance.service.hooks";
import { useVerifyProductId } from "../../services/finance.service.hooks";
import { transformProductByForm } from "../../utils/product.utils";
import { RootNavigatorPropList } from "../../navigation/Navigator.types";
import { getDefaultValuesForRef } from "./ProductForm.helpers";

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
  const inputs = useRef<FormInputRef>(getDefaultValuesForRef());
  const { goBack } = useNavigation<RootNavigatorPropList>();
  const verifyMutation = useVerifyProductId();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();

  const { mutateAsync: verifyProductId, reset: resetVerify } = verifyMutation;
  const { mutateAsync: createProduct, reset: resetCreate } = createMutation;
  const { mutateAsync: updateProduct, reset: resetUpdate } = updateMutation;
  const { isPending: isPendingVerifyMutation } = verifyMutation;
  const isPendingMutations = isPendingVerifyMutation;

  const formMethods = selectedProduct
    ? updateProductMethods
    : newProductMethods;
  const method = selectedProduct ? "PUT" : "POST";
  const disableId = method === "PUT";
  const { handleSubmit, clearErrors, reset, setError } = formMethods;
  const titleText = selectedProduct
    ? "Formulario de edición"
    : "Formulario de registro";

  const createProductHandler = async (form: NewProductFormValues) => {
    const { id } = form;

    if (await verifyProductId(id)) {
      setError("id", {
        message: "ID inválido",
      });
      return;
    }

    resetVerify();
    try {
      await createProduct(transformProductByForm(form));
      resetCreate();
      goBack();
    } catch (e) {
      setError("dateRevision", {
        message: e.message,
      });
    }
  };

  const updateProductHandler = async (form: any) => {
    try {
      await updateProduct(form);
      resetUpdate();
    } catch (e) {
      setError("dateRevision", {
        message: e.message,
      });
    }
  };

  const submitHandler = (form: NewProductFormValues | any) => {
    if (method === "POST") createProductHandler(form);
    if (method === "PUT") updateProductHandler(form);
  };

  const focusNextField = (key: InputRefKeys) => {
    inputs.current[key]?.focus();
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
            <View>
              <Text style={styles.title}>{titleText}</Text>
              <TextBox
                ref={(input) => (inputs.current.id = input)}
                label="ID"
                name="id"
                returnKeyType="next"
                editable={!disableId}
                onSubmitEditing={() => focusNextField("name")}
              />
              <TextBox
                ref={(input) => (inputs.current.name = input)}
                label="Nombre"
                name="name"
                returnKeyType="next"
                onSubmitEditing={() => focusNextField("description")}
              />
              <TextBox
                ref={(input) => (inputs.current.description = input)}
                label="Descripción"
                name="description"
                returnKeyType="next"
                onSubmitEditing={() => focusNextField("logo")}
              />
              <TextBox
                ref={(input) => (inputs.current.logo = input)}
                label="Logo"
                name="logo"
                returnKeyType="next"
                onSubmitEditing={() => focusNextField("dateRelease")}
              />
              <TextBox
                ref={(input) => (inputs.current.dateRelease = input)}
                label="Fecha Liberación"
                name="dateRelease"
                returnKeyType="next"
                maxLength={10}
                formatter={formatInputDate}
                onSubmitEditing={() => focusNextField("dateRevision")}
              />
              <TextBox
                ref={(input) => (inputs.current.dateRevision = input)}
                label="Fecha Revisión"
                name="dateRevision"
                returnKeyType="done"
                maxLength={10}
                formatter={formatInputDate}
                onSubmitEditing={handleSubmit(submitHandler)}
              />
            </View>
            <View>
              <Button
                title="Enviar"
                disabled={isPendingMutations}
                onPress={handleSubmit(submitHandler)}
              />
              <Button
                title="Reiniciar"
                buttonType="action"
                onPress={resetForm}
                disabled={isPendingMutations}
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
