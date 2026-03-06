import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import ConstructionRemodeling from "./pages/ConstructionRemodeling";
import FacilityEmergency from "./pages/FacilityEmergency";
import Industries from "./pages/Industries";
import About from "./pages/About";
import JoinTeam from "./pages/JoinTeam";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route
              path="/construction-remodeling"
              element={<ConstructionRemodeling />}
            />
            <Route
              path="/facility-emergency"
              element={<FacilityEmergency />}
            />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<JoinTeam />} />
            <Route path="/quote" element={<Quote />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL \"*\" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
