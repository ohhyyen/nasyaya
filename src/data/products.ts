import { Product } from "@/types/product";

export const dummyProducts: Product[] = [];

// Produk Pakaian (20 items)
// 10 produk Momotaro Jeans
const momotaroImages = [
  "/momotaro-jeans-1.jpg",
  "/momotaro-jeans-2.jpg",
  "/momotaro-jeans-3.jpg",
  "/momotaro-jeans-4.jpg",
  "/momotaro-jeans-5.jpg",
  "/momotaro-jeans-6.jpg",
  "/momotaro-jeans-7.jpg",
  "/momotaro-jeans-8.jpg",
  "/momotaro-jeans-9.jpg",
  "/momotaro-jeans-10.jpg",
];

const momotaroNames = [
  "Momotaro 0705SP (Going to Battle)",
  "Momotaro 0405SP (High Tapered)",
  "Momotaro 0306SP (Tight Tapered)",
  "Momotaro 0201SP (Natural Tapered)",
  "Momotaro 0701SP (Tight Straight)",
  "Momotaro 0401SP (Classic Straight)",
  "Momotaro 0301SP (Slim Straight)",
  "Momotaro 0205SP (High Tapered)",
  "Momotaro 0700SP (Classic Straight)",
  "Momotaro 0400SP (High Tapered)",
];

for (let i = 0; i < 10; i++) {
  const price = Math.floor(Math.random() * (1800 - 1200 + 1) + 1200); // Harga antara RM 1200 - RM 1800
  dummyProducts.push({
    id: `momotaro-jeans-${i + 1}`,
    name: momotaroNames[i],
    description: `Seluar jeans denim premium dari Momotaro, buatan tangan dengan kualiti terbaik dan rekaan klasik.`,
    price: price,
    imageUrl: momotaroImages[i % momotaroImages.length],
    category: "Pakaian",
  });
}

// 10 produk Evisu Jeans
const evisuImages = [
  "/evisu-jeans-1.jpg",
  "/evisu-jeans-2.jpg",
  "/evisu-jeans-3.jpg",
  "/evisu-jeans-4.jpg",
  "/evisu-jeans-5.jpg",
  "/evisu-jeans-6.jpg",
  "/evisu-jeans-7.jpg",
  "/evisu-jeans-8.jpg",
  "/evisu-jeans-9.jpg",
  "/evisu-jeans-10.jpg",
];

const evisuNames = [
  "Evisu 2000 No.2 (Regular Straight)",
  "Evisu 2001 No.2 (Loose Straight)",
  "Evisu 2004 No.2 (Slim Straight)",
  "Evisu 2005 No.2 (Boot Cut)",
  "Evisu 2008 No.2 (Slim Tapered)",
  "Evisu 2010 No.2 (Regular Tapered)",
  "Evisu 2017 No.2 (Slim Straight)",
  "Evisu 2020 No.2 (Loose Straight)",
  "Evisu 2023 No.2 (Regular Straight)",
  "Evisu 2026 No.2 (Slim Tapered)",
];

for (let i = 0; i < 10; i++) {
  const price = Math.floor(Math.random() * (1500 - 900 + 1) + 900); // Harga antara RM 900 - RM 1500
  dummyProducts.push({
    id: `evisu-jeans-${i + 1}`,
    name: evisuNames[i],
    description: `Seluar jeans Evisu dengan rekaan ikonik dan kualiti denim Jepun yang terkenal.`,
    price: price,
    imageUrl: evisuImages[i % evisuImages.length],
    category: "Pakaian",
  });
}

// Produk Wangian (15 items)
const fragranceImages = [
  "/wangian-1.jpg",
  "/wangian-2.jpg",
  "/wangian-3.jpg",
  "/wangian-4.jpg",
  "/wangian-5.jpg",
  "/wangian-6.jpg",
  "/wangian-7.jpg",
  "/wangian-8.jpg",
  "/wangian-9.jpg",
  "/wangian-10.jpg",
  "/wangian-11.jpg",
  "/wangian-12.jpg",
  "/wangian-13.jpg",
  "/wangian-14.jpg",
  "/wangian-15.jpg",
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