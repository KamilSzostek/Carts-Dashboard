export interface IProduct {
  id: number;
  title: string;
  quantity: number;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: [];
}
