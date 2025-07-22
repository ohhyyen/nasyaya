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
    imageUrls: [momotaroImages[i % momotaroImages.length], momotaroImages[(i + 1) % momotaroImages.length]], // Contoh: 2 gambar per produk
    category: "Pakaian",
  });
}

// Mengemas kini URL gambar untuk produk Momotaro 0705SP (momotaro-jeans-1)
const momotaro0705SP = dummyProducts.find(p => p.id === 'momotaro-jeans-1');
if (momotaro0705SP) {
  momotaro0705SP.imageUrls = [
    "/Momotaro-0705sp-BackStand2_800x.jpg", // Ini adalah gambar utama yang baru
    "/DSC_0513_800x.jpg",
    "/MomotaroGTB-Button_800x.jpg",
    "/MomotaroGTB-BackPocket_800x.jpg",
    "/Momotaro-PinkInseam_copy_800x.jpg",
    "/GTB-FrontFlatSlant_800x.jpg",
    "/DSC_0478_800x.jpg",
    "/DSC_0485_800x.jpg",
    "/DSC_0476_800x.jpg",
    "/Momotaro-0705sp-RightStand1_800x.jpg",
    "/Momotaro-0705sp-LeftStand1_800x.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0405SP (High Tapered) (momotaro-jeans-2)
const momotaro0405SP = dummyProducts.find(p => p.id === 'momotaro-jeans-2');
if (momotaro0405SP) {
  momotaro0405SP.imageUrls = [
    "/imgi_2_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-1_2000x.jpg",
    "/imgi_3_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-2_2000x.jpg",
    "/imgi_4_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-3_2000x.jpg",
    "/imgi_5_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-4_2000x.jpg",
    "/imgi_16_Momotaro-MMJB0101-Classic-Selvedge-Jeans-1_2000x.jpg",
    "/imgi_14_Momotaro-MMJB0101-Classic-Selvedge-Jeans-3_2000x.jpg",
    "/imgi_15_Momotaro-MMJB0101-Classic-Selvedge-Jeans-4_2000x.jpg",
    "/imgi_24_Momotaro-MMJB0101-Classic-Selvedge-Jeans-5_400x.jpg",
    "/imgi_22_Momotaro-MMJB0101-Classic-Selvedge-Jeans-6_400x.jpg",
    "/imgi_23_Momotaro-MMJB0101-Classic-Selvedge-Jeans-7_400x.jpg",
    "/imgi_25_Momotaro-MMJB0101-Classic-Selvedge-Jeans-8_400x.jpg",
    "/imgi_26_Momotaro-MMJB0101-Classic-Selvedge-Jeans-9_400x.jpg",
    "/imgi_11_Momotaro-MMJB0101-Classic-Selvedge-Jeans-10_2000x.jpg",
    "/imgi_12_Momotaro-MMJB0101-Classic-Selvedge-Jeans-11_2000x.jpg",
    "/imgi_18_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-1_400x.jpg",
    "/imgi_20_Momotaro-MMJB0201-Classic-Selvedge-Jeans-MDL-3_400x.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0306SP (Tight Tapered) (momotaro-jeans-3)
const momotaro0306SP = dummyProducts.find(p => p.id === 'momotaro-jeans-3');
if (momotaro0306SP) {
  momotaro0306SP.imageUrls = [
    "/pasted-image-2025-07-22T10-30-22-358Z-1.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-2.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-3.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-4.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-5.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-6.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-7.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-8.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-9.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-10.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-11.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-12.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-13.jpeg",
    "/pasted-image-2025-07-22T10-30-22-358Z-14.jpeg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0201SP (Natural Tapered) (momotaro-jeans-4)
const momotaro0201SP = dummyProducts.find(p => p.id === 'momotaro-jeans-4');
if (momotaro0201SP) {
  momotaro0201SP.imageUrls = [
    "/pasted-image-2025-07-22T10-33-30-804Z-1.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-2.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-3.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-4.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-5.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-6.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-7.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-8.jpeg",
    "/pasted-image-2025-07-22T10-33-30-804Z-9.jpeg",
  ];
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
    imageUrls: [evisuImages[i % evisuImages.length], evisuImages[(i + 1) % evisuImages.length]], // Contoh: 2 gambar per produk
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
    imageUrls: [fragranceImages[i % fragranceImages.length], fragranceImages[(i + 1) % fragranceImages.length]], // Contoh: 2 gambar per produk
    category: "Wangian",
  });
}