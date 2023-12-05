import type { AxiosResponse } from "axios";
import type { IProduct, IProductGetResponse, RequestOptions } from "@/types";
import { fetchDataHelper } from "@/utils/fetchHelper";
import _ from "lodash";

export const defaultGETProductsRequestConfig: RequestOptions = {
  method: "GET",
  url: "/products",
};

export const defaultGETSearchRequestConfig: RequestOptions = {
  method: "GET",
  url: "/products/search",
};

export async function getProducts(
  config: Record<string, any>
): Promise<IProductGetResponse> {
  let result: IProductGetResponse = await fetchDataHelper<IProductGetResponse>(
    _.merge({ ...defaultGETProductsRequestConfig }, { ...config })
  );
  return result;
}

export async function getProductsWithSearch(
  config: Record<string, any>
): Promise<IProductGetResponse> {
  let result: IProductGetResponse = await fetchDataHelper<IProductGetResponse>(
    _.merge({ ...defaultGETSearchRequestConfig }, { ...config })
  );
  return result;
}
