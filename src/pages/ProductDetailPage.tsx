import React from "react";
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner"; // Import toast

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = dummyProducts.find((p) => p.id === productId);

  const handleAddToCart = () => {
    if (product) {
      toast.success(`${product.name} telah ditambah ke bakul!`);
      console.log(`Added ${product.name} to cart`);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-white text-center pt-20">
        <h1 className="text-3xl font-bold mb-4">Produk Tidak Ditemui</h1>
        <p className="text-lg mb-6">Maaf, produk yang anda cari tidak wujud.</p>
        <Button asChild>
          <Link to="/">Kembali ke Laman Utama</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-white pt-20">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link to={product.category === "Pakaian" ? "/pakaian" : "/wangian"}>
            <ArrowLeft className="h-5 w-5 text-white" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">{product.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        {/* Product Image Carousel */}
        <div className="flex justify-center items-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {product.imageUrls.map((imageUrl, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6"> {/* Dibuang aspect-square */}
                        <img
                          src={imageUrl}
                          alt={`${product.name} - Gambar ${index + 1}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <Card className="bg-white/20 border-none text-white">
            <CardHeader>
              <CardTitle className="text-4xl font-bold mb-2">{product.name}</CardTitle>
              <CardDescription className="text-xl text-gray-200">
                {product.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-primary-foreground mb-6">
                RM {product.price.toFixed(2)}
              </p>
              <Button 
                onClick={handleAddToCart} 
                className="w-full text-lg py-3"
                disabled={product.isSoldOut} // Disable button if sold out
              >
                {product.isSoldOut ? "Habis Dijual" : "Tambah ke Bakul"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;