import { FinanceProduct } from "types/product.types";
import { renderPlaceholders, searchByText } from "./common.utils";
import { buildProduct } from "./testUtils/builders/product.builders";
import { getStoreSetState } from "./stores.utils";
import { transformFormToFinanceProduct } from "utils/product.utils";
import { formatFrontendDateToBackend } from "utils/date.utils";
import { ProductFormValues } from "types/form.types";
import { formatBackendDateToFrontend } from "utils/date.utils";
import { formatInputDate, formatDate } from "utils/date.utils";
import SimplePlaceholder from "components/global/SimplePlaceholder/SimplePlaceholder";
import { getTextFromMessage } from "./common.utils";

describe("renderPlaceholders", () => {
  it("should render the specified number of placeholders", () => {
    const length = 6;
    const placeholders = renderPlaceholders(length);

    expect(placeholders).toHaveLength(length);
    placeholders.forEach((placeholder, index) => {
      expect(placeholder.type).toBe(SimplePlaceholder);
      expect(placeholder.key).toBe(`placeholder-${index}-${index}`);
    });
  });

  it("should render 5 placeholders by default if no length is specified", () => {
    //@ts-expect-error
    const placeholders = renderPlaceholders();

    expect(placeholders).toHaveLength(5);
    placeholders.forEach((placeholder, index) => {
      expect(placeholder.type).toBe(SimplePlaceholder);
      expect(placeholder.key).toBe(`placeholder-${index}-${index}`);
    });
  });
});

describe("searchByText", () => {
  const products: FinanceProduct[] = [
    buildProduct({ id: "1", name: "Product 1", description: "Description 1" }),
    buildProduct({ id: "2", name: "Product 2", description: "Description 2" }),
    buildProduct({ id: "3", name: "Product 3", description: "Description 3" }),
  ];

  it("should return matching products based on searchText", () => {
    const searchText = "Product 1";
    const expectedResults: FinanceProduct[] = [
      buildProduct({
        id: "1",
        name: "Product 1",
        description: "Description 1",
      }),
    ];

    const results = searchByText(products, searchText);

    expect(results).toEqual(expectedResults);
  });

  it("should return empty array if no matching products found", () => {
    const searchText = "Product 4";
    const expectedResults: FinanceProduct[] = [];

    const results = searchByText(products, searchText);

    expect(results).toEqual(expectedResults);
  });
});

describe("getStoreSetState", () => {
  it("should return the payload if it is not a function", () => {
    const payload = "new value";
    const prev = "previous value";
    const result = getStoreSetState(payload, prev);
    expect(result).toBe(payload);
  });

  it("should return the result of the payload function if it is a function", () => {
    const payload = (prev: string) => prev.toUpperCase();
    const prev = "previous value";
    const result = getStoreSetState(payload, prev);
    expect(result).toBe(prev.toUpperCase());
  });
});

describe("transformFormToFinanceProduct", () => {
  it("should transform form values to finance product", () => {
    const form: ProductFormValues = {
      id: "1",
      name: "Product 1",
      description: "This is a product",
      logo: "logo.png",
      dateRelease: "01/01/2022",
      dateRevision: "01/01/2023",
    };

    const expectedProduct: FinanceProduct = buildProduct({
      id: "1",
      name: "Product 1",
      description: "This is a product",
      logo: "logo.png",
      date_release: formatFrontendDateToBackend("01/01/2022"),
      date_revision: formatFrontendDateToBackend("01/01/2023"),
    });

    const result = transformFormToFinanceProduct(form);

    expect(result).toEqual(expectedProduct);
  });
});

describe("formatInputDate", () => {
  it("should format the input date correctly", () => {
    expect(formatInputDate("", "01/01/2022")).toBe("01/01/2022");
    expect(formatInputDate("", "01-01-2022")).toBe("01/01/2022");
    expect(formatInputDate("", "01012022")).toBe("01/01/2022");
    expect(formatInputDate("", "01.01.2022")).toBe("01/01/2022");
  });
});

describe("formatDate", () => {
  it("should format the date correctly", () => {
    expect(formatDate("2022-01-01")).toBe("01/01/2022");
  });

  it("should return an empty string if the date is not provided", () => {
    expect(formatDate()).toBe("");
  });
});

describe("formatFrontendDateToBackend", () => {
  it("should format the frontend date to backend format", () => {
    expect(formatFrontendDateToBackend("01/01/2022")).toBe("2022-01-01");
    expect(formatFrontendDateToBackend("31/12/2022")).toBe("2022-12-31");
    expect(formatFrontendDateToBackend("28/02/2022")).toBe("2022-02-28");
  });
});

describe("formatBackendDateToFrontend", () => {
  it("should format the backend date to frontend format", () => {
    expect(formatBackendDateToFrontend("2022-01-01")).toBe("01/01/2022");
    expect(formatBackendDateToFrontend("2022-12-31")).toBe("31/12/2022");
    expect(formatBackendDateToFrontend("2022-02-28")).toBe("28/02/2022");
  });
});

describe("getTextFromMessage", () => {
  it("should return the message if it is a string", () => {
    expect(getTextFromMessage("Hello")).toBe("Hello");
  });

  it("should return the message as a string if it is a number", () => {
    expect(getTextFromMessage(123)).toBe("123");
  });

  it("should return the JSON stringified message if it is an object", () => {
    const obj = { key: "value" };
    expect(getTextFromMessage(obj)).toBe(JSON.stringify(obj));
  });

  it("should return the JSON stringified message if it is an array", () => {
    const arr = [1, 2, 3];
    expect(getTextFromMessage(arr)).toBe(JSON.stringify(arr));
  });

  it("should return the JSON stringified message if it is a boolean", () => {
    expect(getTextFromMessage(true)).toBe(JSON.stringify(true));
  });
});
