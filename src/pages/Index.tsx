import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl mx-auto text-white p-4">
      <img src="/Nasyaya.png" alt="Nasyaya Collection Logo" className="h-64 sm:h-96 mb-0" />
      <h1 className="text-2xl font-custom font-light mb-0 mt-[-1rem]">
        Selamat Datang ke
      </h1>
      <h1 className="text-4xl font-bold mb-6">
        NASYAYA COLLECTION
      </h1>
      <p className="text-base mb-8 font-light"> {/* Menukar text-lg kepada text-base di sini */}
        Terokai koleksi pakaian moden dan wangian eksklusif kami. Kami menawarkan produk berkualiti tinggi yang kami bawakan dari luar negara untuk memenuhi keperluan gaya anda.
      </p>
      {/* Komponen MadeWithDyad perlu kelihatan pada latar belakang gelap */}
      <div className="mt-8">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;