import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react"; // Import ShoppingCart icon

const Navbar: React.FC = () => {
  return (
    <nav className="backdrop-blur-md shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-sm font-bold text-white font-custom">
          Nasyaya Collection
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Button asChild variant="ghost" className="text-white hover:bg-white/20 hover:text-white">
            <Link to="/pakaian">Produk Pakaian</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-white/20 hover:text-white">
            <Link to="/wangian">Produk Wangian</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-white/20 hover:text-white">
            <Link to="/tentang-kami">Tentang Kami</Link>
          </Button>
          <Button asChild variant="ghost" className="text-white hover:bg-white/20 hover:text-white">
            <Link to="/hubungi-kami">Hubungi Kami</Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
            <Link to="/bakul">
              {/* Membungkus ikon dan teks dalam satu span */}
              <span>
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Bakul Beli-belah</span>
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-gray-900 text-white border-l border-gray-700">
              <nav className="flex flex-col gap-4 pt-8">
                <Link to="/pakaian" className="text-lg font-medium hover:text-gray-300" onClick={() => document.getElementById('sheet-close-button')?.click()}>
                  Produk Pakaian
                </Link>
                <Link to="/wangian" className="text-lg font-medium hover:text-gray-300" onClick={() => document.getElementById('sheet-close-button')?.click()}>
                  Produk Wangian
                </Link>
                <Link to="/tentang-kami" className="text-lg font-medium hover:text-gray-300" onClick={() => document.getElementById('sheet-close-button')?.click()}>
                  Tentang Kami
                </Link>
                <Link to="/hubungi-kami" className="text-lg font-medium hover:text-gray-300" onClick={() => document.getElementById('sheet-close-button')?.click()}>
                  Hubungi Kami
                </Link>
                <Link to="/bakul" className="text-lg font-medium hover:text-gray-300 flex items-center gap-2" onClick={() => document.getElementById('sheet-close-button')?.click()}>
                  {/* Membungkus ikon dan teks dalam satu span */}
                  <span>
                    <ShoppingCart className="h-5 w-5" /> Bakul Beli-belah
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;