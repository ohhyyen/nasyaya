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
        <div
          className="min-h-screen flex flex-col bg-cover bg-center relative"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516762689617-ad4063c9d095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          {/* Overlay untuk kebolehbacaan teks yang lebih baik */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex-grow pt-[64px]"> {/* Tambah padding untuk menolak kandungan ke bawah bar navigasi */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pakaian" element={<ClothingProductList />} />
              <Route path="/wangian" element={<FragranceProductList />} />
              {/* TAMBAH SEMUA LALUAN KUSTOM DI ATAS LALUAN CATCH-ALL "*" */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;