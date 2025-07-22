import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shirt, SprayCan } from "lucide-react";

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516762689617-ad4063c9d095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Overlay untuk kebolehbacaan teks yang lebih baik */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center max-w-2xl mx-auto text-white">
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
      </div>
      {/* Komponen MadeWithDyad perlu kelihatan pada latar belakang gelap */}
      <div className="relative z-10">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;