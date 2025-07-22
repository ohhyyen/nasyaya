import React from "react";
import { Product } from "@/types/product";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full max-w-sm flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <Link to={`/products/${product.id}`} className="block">
        <CardHeader className="p-0">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-full h-64 object-contain rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600 mb-3 line-clamp-3">
            {product.description}
          </CardDescription>
          <p className="text-xl font-bold text-primary">RM {product.price.toFixed(2)}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button onClick={() => onAddToCart(product)} className="w-full">
          Tambah ke Bakul
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;