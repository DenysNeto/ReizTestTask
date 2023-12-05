import axiosInstance from "@/services/apiInstance";
import type { RequestOptions } from "@/types";
import type { AxiosResponse } from "axios";

export async function fetchDataHelper<T>(config: RequestOptions): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosInstance(config);

    console.log("RESPONSE", response);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
