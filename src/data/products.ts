import { Product } from "@/types/product";

export const dummyProducts: Product[] = [];

// Produk Pakaian (20 items)
// 10 produk Momotaro Jeans
for (let i = 1; i <= 10; i++) {
  const price = Math.floor(Math.random() * (1800 - 1200 + 1) + 1200); // Harga antara RM 1200 - RM 1800
  dummyProducts.push({
    id: `momotaro-jeans-${i}`,
    name: `Momotaro Jeans Vintage ${i}`,
    description: `Seluar jeans denim premium dari Momotaro, buatan tangan dengan kualiti terbaik dan rekaan klasik.`,
    price: price,
    imageUrl: `https://via.placeholder.com/300x300/ADD8E6/000000?text=Momotaro+${i}`,
    category: "Pakaian",
  });
}

// 10 produk Evisu Jeans
for (let i = 1; i <= 10; i++) {
  const price = Math.floor(Math.random() * (1500 - 900 + 1) + 900); // Harga antara RM 900 - RM 1500
  dummyProducts.push({
    id: `evisu-jeans-${i}`,
    name: `Evisu Jeans Daicock ${i}`,
    description: `Seluar jeans Evisu dengan rekaan ikonik dan kualiti denim Jepun yang terkenal.`,
    price: price,
    imageUrl: `https://via.placeholder.com/300x300/FFB6C1/000000?text=Evisu+${i}`,
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