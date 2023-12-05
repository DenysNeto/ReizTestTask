export interface IProductTableRow {
  title: string;
  category: string;
  brand: string;
  price: number;
  stock: string;
  rating: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface IProductGetResponse {
  products: Array<IProduct>;
  total: number;
  skip: number;
  limit: number;
}
