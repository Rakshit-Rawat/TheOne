// types.ts

export interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
  colors: string[];
  category: string;
  sizes: string[];
  description: string;
  images: string[];
}

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
}
