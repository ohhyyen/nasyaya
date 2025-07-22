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
    "/imgi_5_DSCF6668__00357.jpg",
    "/imgi_7_DSCF6672__76496.jpg",
    "/imgi_9_DSCF6682__67580.jpg",
    "/imgi_11_DSCF6686__02393.jpg",
    "/imgi_54_DSCF6689__18037.jpg",
    "/imgi_55_DSCF7567__79980.jpg",
    "/imgi_56_DSCF7569__17686.jpg",
    "/imgi_58_DSCF7575__08723.jpg",
    "/imgi_59_DSCF7576__84381.jpg",
    "/imgi_60_DSCF7570__21982.jpg",
    "/imgi_61_DSCF7573__66670.jpg",
    "/imgi_62_DSCF7571__54865.jpg",
    "/imgi_3_DSCF6657__48621.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0201SP (Natural Tapered) (momotaro-jeans-4)
const momotaro0201SP = dummyProducts.find(p => p.id === 'momotaro-jeans-4');
if (momotaro0201SP) {
  momotaro0201SP.imageUrls = [
    "/imgi_7_momotaro-0201-slim-fit-straight-1_460x.jpg",
    "/imgi_9_momotaro-0201-slim-fit-straight-3_460x.jpg",
    "/imgi_10_momotaro-0201-slim-fit-straight-4_460x.jpg",
    "/imgi_11_momotaro-0201-slim-fit-straight-5_460x.jpg",
    "/imgi_5_momotaro-0201-slim-fit-straight-6_460x.jpg",
    "/imgi_6_momotaro-0201-slim-fit-straight-7_460x.jpg",
    "/imgi_12_momotaro-0201-slim-straight-vintage-label-2_460x.jpg",
    "/imgi_16_momotaro-0906-v-wide-jeans-5_300x.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0701SP (Tight Straight) (momotaro-jeans-5)
const momotaro0701SP = dummyProducts.find(p => p.id === 'momotaro-jeans-5');
if (momotaro0701SP) {
  momotaro0701SP.imageUrls = [
    "/imgi_5_ac29591835cbc50291faaab54ef0c233.jpg",
    "/imgi_6_09930deca6687ea3f038efcdcb7b45fd.jpg",
    "/imgi_7_511afa50892bad547dede9ed02d8d90b.jpg",
    "/imgi_8_f7d27276477c87fc8b68e457ee2033ed.jpg",
    "/imgi_3_97c4577e63e16dfa692b02039096126a.jpg",
    "/imgi_4_ed264d9ddc3a31f7f4cf7f4e9b261562.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0401SP (Classic Straight) (momotaro-jeans-6)
const momotaro0401SP = dummyProducts.find(p => p.id === 'momotaro-jeans-6');
if (momotaro0401SP) {
  momotaro0401SP.imageUrls = [
    "/imgi_4_5166146da6f888e941323c2fe2e58193.jpg",
    "/imgi_5_b4f0ea48010a9876918ff30840c2ffdb.jpg",
    "/imgi_6_54327028ec94424b1e3bb17f76940a7c.jpg",
    "/imgi_8_9726b745af046197d1355cc34b89811a.jpg",
    "/imgi_10_637fc31f384c5348806b602de308c535.jpg",
    "/imgi_11_a7f7bf228553e57071fc6592497ae3f9.jpg",
    "/imgi_12_771c4e2afa1e9349e038f84b186e1f05.jpg",
    "/imgi_13_214e6a1f7b32448296b55b512179ae42.jpg",
    "/imgi_14_a4bc714e8aa85560352a8a02a429e4d1.jpg",
    "/imgi_15_9129be6ff206d86716797f60faa7790d.jpg",
    "/imgi_16_49384d3713dba8353b7dcac345984614.jpg",
    "/imgi_17_8755eb5f9e097b02384f931285e05e32.jpg",
    "/imgi_18_18bf9866b6bc0b5e62d59eb58caa0bd6.jpg",
    "/imgi_19_0dab906fb76d14678000ea98a4d9e163.jpg",
    "/imgi_20_db0a1d6dfff7e4ce19db9144487dc312.jpg",
    "/imgi_3_151f678786dce394ca43bb684d7881fd.jpg",
  ];
}

// Mengemas kini URL gambar untuk produk Momotaro 0301SP (Slim Straight) (momotaro-jeans-7)
const momotaro0301SP = dummyProducts.find(p => p.id === 'momotaro-jeans-7');
if (momotaro0301SP) {
  momotaro0301SP.imageUrls = [
    "/imgi_3_5c8dfb0121dd9aaf7acde9ca79ed4be3.jpg",
    "/imgi_5_3848fbdfb43f68f97af3f824bedce893.jpg",
    "/imgi_6_7dfe85401fd9266d7a0a191da00267cd.jpg",
    "/imgi_10_b2b5f16be5a73bcc1dbb7285b4514cb6.jpg",
    "/imgi_11_cee70208dec491b76723ad6c7df070ee.jpg",
    "/imgi_12_4d63a597aad0900ffbb71932a85e3964.jpg",
    "/imgi_13_9177c82d8818c91dd4fbe52f12b15f31.jpg",
    "/imgi_14_707ee98fb9e8c945f9514a940f53ce8c.jpg",
    "/imgi_15_d8054f7ac50dba1b4887083982129d7d.jpg",
    "/imgi_16_934aa00cebdabab74ac9cbebc7626903.jpg",
    "/imgi_17_0727e49ee41278c5d3c7a6c435b582f9.jpg",
    "/imgi_19_a5b5e9fb8420f0bb4ecb45d7d01395ab.jpg",
    "/imgi_20_04e723c6d51c8ec75e82c9bc0c160fe8.jpg",
  ];
}

// Tandakan produk Momotaro yang habis dijual
const momotaro0205SP = dummyProducts.find(p => p.id === 'momotaro-jeans-8');
if (momotaro0205SP) {
  momotaro0205SP.isSoldOut = true;
}

const momotaro0700SP = dummyProducts.find(p => p.id === 'momotaro-jeans-9');
if (momotaro0700SP) {
  momotaro0700SP.isSoldOut = true;
}

const momotaro0400SP = dummyProducts.find(p => p.id === 'momotaro-jeans-10');
if (momotaro0400SP) {
  momotaro0400SP.isSoldOut = true;
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

// Tandakan produk Evisu yang habis dijual
const evisu2000 = dummyProducts.find(p => p.id === 'evisu-jeans-1');
if (evisu2000) {
  evisu2000.isSoldOut = true;
}

const evisu2001 = dummyProducts.find(p => p.id === 'evisu-jeans-2');
if (evisu2001) {
  evisu2001.isSoldOut = true;
}

const evisu2004 = dummyProducts.find(p => p.id === 'evisu-jeans-3');
if (evisu2004) {
  evisu2004.isSoldOut = true;
}

const evisu2005 = dummyProducts.find(p => p.id === 'evisu-jeans-4');
if (evisu2005) {
  evisu2005.isSoldOut = true;
}

const evisu2008 = dummyProducts.find(p => p.id === 'evisu-jeans-5');
if (evisu2008) {
  evisu2008.imageUrls = [
    "/imgi_1_19231799_42502166_1000.jpg",
    "/imgi_2_19231799_42500768_1000.jpg",
    "/imgi_3_19231799_42502167_1000.jpg",
    "/imgi_4_19231799_42500766_1000.jpg",
    "/imgi_5_19231799_42501308_1000.jpg",
  ];
}

const evisu2010 = dummyProducts.find(p => p.id === 'evisu-jeans-6');
if (evisu2010) {
  evisu2010.imageUrls = [
    "/imgi_1_20107476_50162328_1000.jpg",
    "/imgi_3_20107476_50162327_1000.jpg",
    "/imgi_2_20107476_50162334_1000.jpg",
    "/imgi_4_20107476_50162332_1000.jpg",
    "/imgi_5_20107476_50162330_1000.jpg",
  ];
}

const evisu2023 = dummyProducts.find(p => p.id === 'evisu-jeans-9');
if (evisu2023) {
  evisu2023.imageUrls = [
    "/imgi_4_33a798414215b55e897d891de0255177496920ae84a8fad831cf874753d47b57.jpg",
    "/imgi_5_aa2ddfa938c14142df90598f22ff3540fe23ef31e7d98902940aaedcb2cc9312.jpg",
    "/imgi_6_460ddf2629e7bec9f63a8c40e335e3dfcd8307aaf70c23d3e18c1677aa7a372d.jpg",
    "/imgi_7_c390627550b5201c23ea050c8297a3056ae0bb9c22473185c353cbc5dad6e0d9.jpg",
    "/imgi_8_ff9a2e34274cf0d433bf68159481274390b1447264f6677c04f38d53916c9e94.jpg",
    "/imgi_9_703ef86b3f36e9b1cf498222f8a976bb3f25d06cb9385ad0104eae91742871be.jpg",
    "/imgi_10_33eefcff251218b546fde924ef2adc77e94ffe7551901da9a1632a3c56fccaa1.jpg",
    "/imgi_11_6c2a80bf347d677b15f5d01f018cc781c3f59868cc9717d5a0c6a1d3e545770a.jpg",
    "/imgi_12_5621335c9a9d0e408fe5d785edd62cf37d3e7c1c5dc1e62691bb4855e23638e8.jpg",
    "/imgi_13_d9b245a675734c96d9f411fbaebe113bb432e74953b4995738600b9178961d00.jpg",
    "/imgi_14_13c9aaf580548a92bbba8f358cfaec86981f15a7f17683458e8bf5db782c100d.jpg",
  ];
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