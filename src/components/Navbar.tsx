import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="backdrop-blur-md shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          NASYAYA COLLECTION
        </Link>
        <div className="flex space-x-4">
          <Button asChild variant="ghost" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link to="/pakaian">Produk Pakaian</Link>
          </Button>
          <Button asChild variant="ghost" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link to="/wangian">Produk Wangian</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;