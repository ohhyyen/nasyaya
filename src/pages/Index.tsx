import { MadeWithDyad } from "@/components/made-with-dyad";
import ProductList from "./ProductList"; // Import ProductList

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow w-full">
        <ProductList /> {/* Render ProductList here */}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;