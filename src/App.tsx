import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClothingProductList from "./pages/ClothingProductList";
import FragranceProductList from "./pages/FragranceProductList";
import Navbar from "./components/Navbar"; // Import Navbar

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Tambah Navbar di sini */}
        <div className="pt-[64px]"> {/* Tambah padding untuk menolak kandungan ke bawah bar navigasi */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pakaian" element={<ClothingProductList />} />
            <Route path="/wangian" element={<FragranceProductList />} />
            {/* TAMBAH SEMUA LALUAN KUSTOM DI ATAS LALUAN CATCH-ALL "*" */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;