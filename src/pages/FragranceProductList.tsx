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
    <div
      className="min-h-screen flex flex-col p-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585386959984-a415d068e95d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Overlay untuk kebolehbacaan teks yang lebih baik */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 container mx-auto">
        <div className="flex items-center mb-8 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="h-5 w-5 text-white" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-center flex-grow text-white">Produk Wangian Kami</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fragranceProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FragranceProductList;