import axiosDefault from "utils/axios.utils";
import {
  fetchProducts,
  verifyProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./finance.service";
import { buildProduct } from "utils/testUtils/builders/product.builders";

jest.mock("utils/axios.utils");

describe("Finance Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch products successfully", async () => {
    const mockData = [{ id: 1, name: "Product 1" }];
    jest.spyOn(axiosDefault, "get").mockResolvedValueOnce({ data: mockData });

    const result = await fetchProducts();

    expect(result).toEqual(mockData);
    expect(axiosDefault.get).toHaveBeenCalledWith("/bp/products");
  });

  it("should verify product ID successfully", async () => {
    const productId = "1";
    const mockData = true;
    jest.spyOn(axiosDefault, "get").mockResolvedValueOnce({ data: mockData });

    const result = await verifyProductId(productId);

    expect(result).toEqual(mockData);
    expect(axiosDefault.get).toHaveBeenCalledWith(
      `/bp/products/verification?id=${productId}`
    );
  });

  it("should create a product successfully", async () => {
    const product = buildProduct({ id: "1", name: "Product 1" });
    const mockData = { success: true };
    jest.spyOn(axiosDefault, "post").mockResolvedValueOnce({ data: mockData });

    const result = await createProduct(product);

    expect(result).toEqual(mockData);
    expect(axiosDefault.post).toHaveBeenCalledWith("/bp/products", product);
  });

  it("should update a product successfully", async () => {
    const product = buildProduct({ id: "1", name: "Product 1" });
    const mockData = { success: true };
    jest.spyOn(axiosDefault, "put").mockResolvedValueOnce({ data: mockData });

    const result = await updateProduct(product);

    expect(result).toEqual(mockData);
    expect(axiosDefault.put).toHaveBeenCalledWith("/bp/products", product);
  });

  it("should delete a product successfully", async () => {
    const productId = "1";
    const mockData = { success: true };
    jest
      .spyOn(axiosDefault, "delete")
      .mockResolvedValueOnce({ data: mockData });

    const result = await deleteProduct(productId);

    expect(result).toEqual(mockData);
    expect(axiosDefault.delete).toHaveBeenCalledWith(
      `/bp/products?id=${productId}`
    );
  });
});
