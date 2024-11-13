import { ReactNode } from "react";

export interface Iuser {
  username: string;
  email: string;
  password: string;
  retypepassword: string;
}

export interface IsignInUser {
  email: string;
  password: string;
}

export interface ProductImages {
  id: number;
  productId: number;
  Image: string;
}

export interface IProduct {
  id: number;
  Productname: string;
  Price: number;
  Description: string;
  Brand: string;
  Storagecapacity: string;
  Colors: string;
  Category: string;
  Stock: number;
  Images: ProductImages[];
}

export interface ProductCardProps {
  product: IProduct;
}

export interface ReviewProps {
  name: string;
  image: string;
  message: string;
}

export interface ScrollToTopProps {
  children: ReactNode;
}
