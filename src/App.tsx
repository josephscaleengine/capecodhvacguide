import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Towns from "./pages/Towns";
import TownDetail from "./pages/TownDetail";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Category from "./pages/Category";
import About from "./pages/About";
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
          <Route path="/towns" element={<Towns />} />
          <Route path="/towns/:townSlug" element={<TownDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleSlug" element={<BlogArticle />} />
          <Route path="/blog/category/:categorySlug" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
