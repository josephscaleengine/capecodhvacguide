import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import TownDetail from "./pages/TownDetail";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Category from "./pages/Category";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <main className="min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/towns/:townSlug" element={<TownDetail />} />
              <Route path="/resources" element={<Blog />} />
              <Route path="/resources/:articleSlug" element={<BlogArticle />} />
              <Route path="/resources/category/:categorySlug" element={<Category />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              {/* Legacy redirects */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:articleSlug" element={<BlogArticle />} />
              <Route path="/blog/category/:categorySlug" element={<Category />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
