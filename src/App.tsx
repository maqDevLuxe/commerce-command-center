import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import Orders from "@/pages/Orders";
import Analytics from "@/pages/Analytics";
import Login from "@/pages/Login";
import Customers from "@/pages/Customers";
import Vendors from "@/pages/Vendors";
import Profile from "@/pages/Profile";
import SecurityPage from "@/pages/Security";
import Billing from "@/pages/Billing";
import FAQ from "@/pages/FAQ";
import ComingSoon from "@/pages/ComingSoon";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth routes - no layout */}
            <Route path="/login" element={<Login />} />

            {/* Admin routes - with sidebar layout */}
            <Route element={<AdminLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/faq" element={<FAQ />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
