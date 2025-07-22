import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shirt, SprayCan } from "lucide-react"; // Menggantikan Perfume dengan SprayCan

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Selamat Datang ke Kedai Kami!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Terokai koleksi pakaian moden dan wangian solat eksklusif kami.
          Kami menawarkan produk berkualiti tinggi untuk memenuhi keperluan gaya dan ibadah anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="px-8 py-6 text-lg">
            <Link to="/pakaian">
              <Shirt className="mr-2 h-5 w-5" /> Lihat Pakaian
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg">
            <Link to="/wangian">
              <SprayCan className="mr-2 h-5 w-5" /> Lihat Wangian
            </Link>
          </Button>
        </div>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;