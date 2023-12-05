export * from "./product";
export * from "./ui";

export interface RequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
}
