import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl mx-auto text-white p-4">
      <img src="/Nasyaya.png" alt="Nasyaya Collection Logo" className="h-64 sm:h-96 mb-0" /> {/* Tukar mb-2 kepada mb-0 di sini */}
      <h1 className="text-2xl font-custom font-light mb-2">
        Selamat Datang ke
      </h1>
      <h1 className="text-4xl font-bold mb-6">
        NASYAYA COLLECTION
      </h1>
      <p className="text-lg mb-8">
        Terokai koleksi pakaian moden dan wangian solat eksklusif kami.
        Kami menawarkan produk berkualiti tinggi untuk memenuhi keperluan gaya dan ibadah anda.
      </p>
      {/* Komponen MadeWithDyad perlu kelihatan pada latar belakang gelap */}
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;