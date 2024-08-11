import React, { useRef } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import styles from "./ProductForm.styles";
import { FormInputRef, InputRefKeys } from "./ProductForm.types";
import { ProductFormProps as Props } from "./ProductForm.types";
import { getDefaultValues } from "./ProductForm.helpers";
import { getDefaultValuesForRef } from "./ProductForm.helpers";
import useProductStore from "stores/product.store";
import { ProductFormValues } from "types/form.types";
import { getProductFormSchema } from "utils/form.utils";
import { useCreateProduct } from "services/finance.service.hooks";
import { useUpdateProduct } from "services/finance.service.hooks";
import { useVerifyProductId } from "services/finance.service.hooks";
import { RootNavigatorPropList } from "navigation/Navigator.types";
import { transformFormToFinanceProduct } from "utils/product.utils";
import TextBox from "components/global/Textbox/Textbox";
import Button from "components/global/Button/Button";
import { formatInputDate } from "utils/date.utils";
import { isAndroid, isiOS } from "utils/common.utils";

const ProductForm: React.FC<Props> = (props) => {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const newProductMethods = useForm<ProductFormValues>({
    mode: "onChange",
    resolver: yupResolver(getProductFormSchema()),
  });
  const updateProductMethods = useForm<ProductFormValues>({
    mode: "onChange",
    resolver: yupResolver(getProductFormSchema()),
    defaultValues: getDefaultValues(selectedProduct),
  });
  const inputs = useRef<FormInputRef>(getDefaultValuesForRef());
  const { goBack } = useNavigation<RootNavigatorPropList>();
  const verifyMutation = useVerifyProductId();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();

  const { mutateAsync: verifyProductId, reset: resetVerify } = verifyMutation;
  const { mutateAsync: createProduct, reset: resetCreate } = createMutation;
  const { mutateAsync: updateProduct, reset: resetUpdate } = updateMutation;
  const { isPending: isPendingCreateMutation } = createMutation;
  const { isPending: isPendingUpdateMutation } = updateMutation;
  const { isPending: isPendingVerifyMutation } = verifyMutation;
  const isPendingMutations =
    isPendingVerifyMutation ||
    isPendingCreateMutation ||
    isPendingUpdateMutation;

  const formMethods = selectedProduct
    ? updateProductMethods
    : newProductMethods;
  const method = selectedProduct ? "PUT" : "POST";
  const disableId = method === "PUT";
  const { handleSubmit, clearErrors, reset, setError } = formMethods;
  const titleText = selectedProduct
    ? "Formulario de edición"
    : "Formulario de registro";

  const createProductHandler = async (form: ProductFormValues) => {
    const { id } = form;

    if (await verifyProductId(id)) {
      setError("id", {
        message: "ID inválido",
      });
      return;
    }

    resetVerify();
    try {
      await createProduct(transformFormToFinanceProduct(form));
      resetCreate();
      goBack();
    } catch (e) {
      setError("dateRevision", {
        message: e.message,
      });
    }
  };

  const updateProductHandler = async (form: ProductFormValues) => {
    try {
      await updateProduct(transformFormToFinanceProduct(form));
      resetUpdate();
      goBack();
    } catch (e) {
      setError("dateRevision", {
        message: e.message,
      });
    }
  };

  const submitHandler = (form: ProductFormValues) => {
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
                placeholder="12345"
                editable={!disableId}
                onSubmitEditing={() => focusNextField("name")}
              />
              <TextBox
                ref={(input) => (inputs.current.name = input)}
                label="Nombre"
                name="name"
                returnKeyType="next"
                placeholder="Producto 1"
                onSubmitEditing={() => focusNextField("description")}
              />
              <TextBox
                ref={(input) => (inputs.current.description = input)}
                label="Descripción"
                name="description"
                returnKeyType="next"
                placeholder="Descripción de producto"
                onSubmitEditing={() => focusNextField("logo")}
              />
              <TextBox
                ref={(input) => (inputs.current.logo = input)}
                label="Logo"
                name="logo"
                returnKeyType="next"
                placeholder="https://www.example.com/logo.png"
                onSubmitEditing={() => focusNextField("dateRelease")}
              />
              <TextBox
                ref={(input) => (inputs.current.dateRelease = input)}
                label="Fecha Liberación"
                name="dateRelease"
                returnKeyType="next"
                maxLength={10}
                formatter={formatInputDate}
                placeholder="22/02/2023"
                onSubmitEditing={() => focusNextField("dateRevision")}
              />
              <TextBox
                ref={(input) => (inputs.current.dateRevision = input)}
                label="Fecha Revisión"
                name="dateRevision"
                returnKeyType="done"
                maxLength={10}
                formatter={formatInputDate}
                placeholder="22/02/2024"
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
