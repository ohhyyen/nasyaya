import React from "react";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/data/products";
import { toast } from "sonner";

const ProductList: React.FC = () => {
  const handleAddToCart = (product: any) => {
    // Implementasi sementara untuk 'Tambah ke Bakul'
    // Nanti kita akan membina sistem bakul yang sebenar
    toast.success(`${product.name} telah ditambah ke bakul!`);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Produk Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;