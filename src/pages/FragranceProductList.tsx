import React from "react";
import ProductCard from "@/components/ProductCard";
import { dummyProducts } from "@/data/products";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const FragranceProductList: React.FC = () => {
  const fragranceProducts = dummyProducts.filter(product => product.category === "Wangian");

  const handleAddToCart = (product: any) => {
    toast.success(`${product.name} telah ditambah ke bakul!`);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">Produk Wangian Kami</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fragranceProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FragranceProductList;