import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shirt, SprayCan } from "lucide-react";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl mx-auto text-white p-4">
      <h1 className="text-5xl font-extrabold mb-6">
        Selamat Datang ke NASYAYA COLLECTION!
      </h1>
      <p className="text-lg mb-8">
        Terokai koleksi pakaian moden dan wangian solat eksklusif kami.
        Kami menawarkan produk berkualiti tinggi untuk memenuhi keperluan gaya dan ibadah anda.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="px-8 py-6 text-lg">
          <Link to="/pakaian">
            <Shirt className="mr-2 h-5 w-5" /> Lihat Pakaian
          </Link>
        </Button>
        <Button asChild variant="outline" className="px-8 py-6 text-lg text-white border-white hover:bg-white hover:text-gray-900">
          <Link to="/wangian">
            <SprayCan className="mr-2 h-5 w-5" /> Lihat Wangian
          </Link>
        </Button>
      </div>
      {/* Komponen MadeWithDyad perlu kelihatan pada latar belakang gelap */}
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;