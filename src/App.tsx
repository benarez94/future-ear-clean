
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ReturnPolicy from "./pages/ReturnPolicy";
import Admin from "./pages/Admin";
import MessageButton from "./components/MessageButton";

// Remplacez cette clé par votre clé publique Stripe de test
const stripePromise = loadStripe('pk_test_51XYZabcdefghijklmnopqrstuvwxyz');
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Elements stripe={stripePromise}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/conditions-generales-vente" element={<TermsAndConditions />} />
            <Route path="/politique-retour" element={<ReturnPolicy />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MessageButton />
        </BrowserRouter>
      </TooltipProvider>
    </Elements>
  </QueryClientProvider>
);

export default App;
