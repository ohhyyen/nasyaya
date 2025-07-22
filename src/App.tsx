import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClothingProductList from "./pages/ClothingProductList";
import FragranceProductList from "./pages/FragranceProductList";
import AboutUs from "./pages/AboutUs"; // Import AboutUs
import ContactUs from "./pages/ContactUs"; // Import ContactUs
import Navbar from "./components/Navbar"; // Import Navbar

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* Tambah Navbar di sini */}
        <div className="min-h-screen flex flex-col relative">
          {/* Overlay untuk kebolehbacaan teks yang lebih baik */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex-grow pt-[64px]"> {/* Tambah padding untuk menolak kandungan ke bawah bar navigasi */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pakaian" element={<ClothingProductList />} />
              <Route path="/wangian" element={<FragranceProductList />} />
              <Route path="/tentang-kami" element={<AboutUs />} /> {/* Laluan baharu */}
              <Route path="/hubungi-kami" element={<ContactUs />} /> {/* Laluan baharu */}
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