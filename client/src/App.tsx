

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Layout from "./components/Layout";
import ScrollToTop from "@/components/Scrolltotop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OffersPage from "./pages/Offers";
import About from "@/pages/About";
import PartnerWithUs from "@/pages/ParterWithUs";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import SignIn from "@/pages/SignIn";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import ReturnRefund from "./pages/return-refund";
import Copyright from "./pages/copyright";
import ShippingPolicy from "./pages/shipping";
import MyAccount from "./pages/my-account";
import FAQ from "./pages/Faq";
import WhyBuy from "./pages/whybuywithus";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail"; // ✅ New

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
          <Toaster />
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/offers" component={OffersPage} />
              <Route path="/about" component={About} />
              <Route path="/partner" component={PartnerWithUs} />
              <Route path="/products" component={ProductPage} />
              <Route path="/product/:id" component={ProductDetail} /> {/* ✅ New route */}
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={CartPage} />
               <Route path="/signin" component={SignIn} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/return-refund" component={ReturnRefund} />
              <Route path="/copyright" component={Copyright} />
              <Route path="/shipping-policy" component={ShippingPolicy} />
              <Route path="/account" component={MyAccount} />
              <Route path="/faq" component={FAQ} />
              <Route path="/whybuywithus" component={WhyBuy} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
          <ScrollToTop />
          <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
