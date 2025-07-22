import { Product } from "@/types/product";

export const dummyProducts: Product[] = [];

// Produk Pakaian (20 items)
// 10 produk Momotaro Jeans
const momotaroImages = [
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0705SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0405SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0306SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0201SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0701SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0401SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0301SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0205SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0700SP_1_1024x1024.jpg?v=1628000000",
  "https://cdn.shopify.com/s/files/1/0070/1922/products/0400SP_1_1024x1024.jpg?v=1628000000",
];

for (let i = 0; i < 10; i++) {
  const price = Math.floor(Math.random() * (1800 - 1200 + 1) + 1200); // Harga antara RM 1200 - RM 1800
  dummyProducts.push({
    id: `momotaro-jeans-${i + 1}`,
    name: `Momotaro Jeans Vintage ${i + 1}`,
    description: `Seluar jeans denim premium dari Momotaro, buatan tangan dengan kualiti terbaik dan rekaan klasik.`,
    price: price,
    imageUrl: momotaroImages[i % momotaroImages.length],
    category: "Pakaian",
  });
}

// 10 produk Evisu Jeans
const evisuImages = [
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9017CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9018CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9019CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9020CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9021CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9022CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9023CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9024CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9025CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
  "https://www.evisu.com/cdn/shop/products/2ESHTM3JE9026CSDN_INDIGO_F_1024x1024.jpg?v=1678900000",
];

for (let i = 0; i < 10; i++) {
  const price = Math.floor(Math.random() * (1500 - 900 + 1) + 900); // Harga antara RM 900 - RM 1500
  dummyProducts.push({
    id: `evisu-jeans-${i + 1}`,
    name: `Evisu Jeans Daicock ${i + 1}`,
    description: `Seluar jeans Evisu dengan rekaan ikonik dan kualiti denim Jepun yang terkenal.`,
    price: price,
    imageUrl: evisuImages[i % evisuImages.length],
    category: "Pakaian",
  });
}

// Produk Wangian (15 items)
const fragranceImages = [
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/61-1-0-0-L._AC_UF894,1000_QL80_.jpg",
];

for (let i = 0; i < 15; i++) {
  const price = Math.floor(Math.random() * (500 - 300 + 1) + 300); // Harga antara RM 300 - RM 500
  dummyProducts.push({
    id: `wangian-${i + 1}`,
    name: `Pati Wangian Kasturi Asli ${i + 1}`,
    description: `Wangian kasturi asli dengan aroma tahan lama, sesuai untuk kegunaan harian dan ibadah.`,
    price: price,
    imageUrl: fragranceImages[i % fragranceImages.length],
    category: "Wangian",
  });
}