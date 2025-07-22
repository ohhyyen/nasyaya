import { Product } from "@/types/product";

export const dummyProducts: Product[] = [];

// Produk Pakaian (20 items)
// 5 produk pakaian berharga RM 1000
for (let i = 1; i <= 5; i++) {
  dummyProducts.push({
    id: `pakaian-premium-${i}`,
    name: `Baju Kurung Eksklusif ${i}`,
    description: `Baju kurung moden dengan rekaan elegan dan fabrik mewah, sesuai untuk majlis istimewa.`,
    price: 1000.00,
    imageUrl: `https://via.placeholder.com/300x300/FFDDC1/000000?text=Pakaian+Premium+${i}`,
    category: "Pakaian",
  });
}

// 15 produk pakaian lain dengan harga berbeza
for (let i = 6; i <= 20; i++) {
  const price = Math.floor(Math.random() * (300 - 80 + 1) + 80); // Harga antara RM 80 - RM 300
  dummyProducts.push({
    id: `pakaian-${i}`,
    name: `Baju Kurung Moden ${i}`,
    description: `Baju kurung moden dengan rekaan elegan, sesuai untuk majlis formal dan kasual.`,
    price: price,
    imageUrl: `https://via.placeholder.com/300x300/C1FFDD/000000?text=Pakaian+${i}`,
    category: "Pakaian",
  });
}

// Produk Wangian (15 items)
// 15 produk wangian berharga antara RM 300 - RM 500
for (let i = 1; i <= 15; i++) {
  const price = Math.floor(Math.random() * (500 - 300 + 1) + 300); // Harga antara RM 300 - RM 500
  dummyProducts.push({
    id: `wangian-${i}`,
    name: `Pati Wangian Kasturi Asli ${i}`,
    description: `Wangian kasturi asli dengan aroma tahan lama, sesuai untuk kegunaan harian dan ibadah.`,
    price: price,
    imageUrl: `https://via.placeholder.com/300x300/DDC1FF/000000?text=Wangian+${i}`,
    category: "Wangian",
  });
}