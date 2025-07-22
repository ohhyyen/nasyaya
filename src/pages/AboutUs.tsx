import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="flex items-center mb-8 pt-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-5 w-5 text-white" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center flex-grow">Tentang Kami</h1>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">
          Selamat datang ke NASYAYA COLLECTION! Kami berdedikasi untuk menyediakan koleksi pakaian moden yang elegan dan wangian solat eksklusif yang berkualiti tinggi.
        </p>
        <p className="text-lg mb-4">
          Misi kami adalah untuk memperkasakan individu dengan gaya yang menawan dan keselesaan dalam ibadah, melalui produk yang direka dengan teliti dan penuh kasih sayang.
        </p>
        <p className="text-lg">
          Terima kasih kerana memilih NASYAYA COLLECTION. Kami berharap anda menikmati pengalaman membeli-belah bersama kami!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;