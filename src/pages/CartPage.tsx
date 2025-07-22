import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="flex items-center mb-8 pt-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5 text-white" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">Bakul Beli-belah</h1>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
        <ShoppingCart className="h-20 w-20 mx-auto mb-4 text-primary" />
        <p className="text-lg mb-4">
          Bakul anda kosong buat masa ini. Jom terokai produk kami!
        </p>
        <Button asChild>
          <Link to="/">Mula Membeli-belah</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartPage;