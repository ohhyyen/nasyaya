import React from "react";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/data/products";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ClothingProductList: React.FC = () => {
  const clothingProducts = dummyProducts.filter(product => product.category === "Pakaian");

  const handleAddToCart = (product: any) => {
    toast.success(`${product.name} telah ditambah ke bakul!`);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8 pt-4"> {/* Tambah pt-4 untuk padding atas */}
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5 text-white" /> {/* Tambah text-white */}
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow text-white">Produk Pakaian Kami</h1> {/* Tambah text-white di sini */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothingProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ClothingProductList;