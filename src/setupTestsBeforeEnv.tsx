// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    formState: {
      errors: {},
    },
    register: jest.fn,
    watch: jest.fn,
    clearErrors: jest.fn,
    setValue: (field: string, value: any) => {},
    trigger: jest.fn,
  }),
  useController: () => ({
    field: {
      onChange: jest.fn,
      onBlur: jest.fn,
      value: jest.fn(),
    },
  }),
  useForm: () => ({
    handleSubmit: jest.fn,
    watch: jest.fn,
    register: jest.fn,
    getValues: jest.fn,
    formState: {
      errors: {},
      isSubmitting: false,
    },
    setValue: (field: string, value: any) => {},
    trigger: jest.fn,
  }),
  useFormState: () => ({
    errors: {},
  }),
  FormProvider: jest.fn,
}));
