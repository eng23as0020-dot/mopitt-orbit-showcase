import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mopitt from "./pages/Mopitt";
import Aster from "./pages/Aster";
import Ceres from "./pages/Ceres";
import Misr from "./pages/Misr";
import Modis from "./pages/Modis";
import Tes from "./pages/Tes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mopitt" element={<Mopitt />} />
          <Route path="/aster" element={<Aster />} />
          <Route path="/ceres" element={<Ceres />} />
          <Route path="/misr" element={<Misr />} />
          <Route path="/modis" element={<Modis />} />
          <Route path="/tes" element={<Tes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
