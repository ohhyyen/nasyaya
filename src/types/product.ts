export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[]; // Diubah dari imageUrl: string;
  category: string;
}