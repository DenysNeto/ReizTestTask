import type { RequestOptions } from "@/types/index.js";
import axios from "axios";
import { beforeEach, expect, test, vi } from "vitest";

vi.mock("axios");

const config: RequestOptions = {
  method: "GET",
  url: "https://dummyjson.com/products",
  params: { limit: 1 },
};

beforeEach(() => {
  vi.doMock("@/utils/fetchHelper.js", () => ({
    fetchDataHelper: async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  }));
});

test("GET sucessfull ", async () => {
  const { fetchDataHelper } = await import("@/utils/fetchHelper.js");

  const mockResponse = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
    ],

    total: 100,
    skip: 10,
    limit: 1,
  };

  axios.get.mockResolvedValue({
    data: mockResponse,
    status: 200,
  });

  let result = await fetchDataHelper(config);
  expect(axios.get).toHaveBeenCalledWith("https://dummyjson.com/products");
  expect(result).toStrictEqual(mockResponse);
});

test("GET failure ", async () => {
  const { fetchDataHelper } = await import("@/utils/fetchHelper.js");
  const mockResponse = {
    data: {},
    status: 404,
  };

  axios.get.mockResolvedValue(mockResponse);

  await expect(fetchDataHelper(config)).rejects.toThrow(
    `HTTP error! Status: ${mockResponse.status}`
  );
});
