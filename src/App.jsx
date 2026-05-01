import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

// Layout bileşenleri
import ShoppingLayout from "./components/shopping-view/layout";
import BottomNavBar from "./components/common/BottomNavBar";
import ShoppingHome from "./pages/shopping-view/home";

// --- PERFORMANS OPTIMIZASYONU: Sayfa bileşenlerini React.lazy ile tembel yükleme ---
const NotFound = lazy(() => import("./pages/not-found"));
const ShoppingListing = lazy(() => import("./pages/shopping-view/listing"));
const SearchProducts = lazy(() => import("./pages/shopping-view/search"));
const ProductSpecsPage = lazy(() =>
  import("./pages/shopping-view/ProductSpecsPage")
);
const ShoppingCartPage = lazy(() => import("./pages/shopping-view/cart"));
const AboutUsPage = lazy(() => import("./pages/shopping-view/about-us"));
const StoreLocatorPage = lazy(() =>
  import("./pages/shopping-view/store-locator")
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/shopping-view/privacy-policy")
);
const TermsAndConditionsPage = lazy(() =>
  import("./pages/shopping-view/terms-and-conditions")
);
const CookiePolicyPage = lazy(() =>
  import("./pages/shopping-view/cookie-policy")
);
const WarrantyInfoPage = lazy(() =>
  import("./pages/shopping-view/warranty-info")
);

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* --- PERFORMANS OPTIMIZASYONU: Rotaları Suspense ile sarmalama --- */}
      {/* lazy ile yüklenen bileşenler için bir "yükleniyor" durumu (fallback) sağlar */}
      <Suspense fallback={<Skeleton className="w-full h-screen bg-gray-200" />}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/shop/home" replace />
            }
          />

          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="search" element={<SearchProducts />} />
            <Route path="product/:id/specs" element={<ProductSpecsPage />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="store-locator" element={<StoreLocatorPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route path="warranty-info" element={<WarrantyInfoPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <div className="bottom-nav-container lg:hidden">
        <BottomNavBar />
      </div>
    </div>
  );
}

export default App;
