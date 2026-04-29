import PropTypes from "prop-types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Info,
  Ruler,
  Truck,
  MessageSquareText,
} from "lucide-react";
import ProductDescriptionPanel from "./ProductDescriptionPanel";
import ProductSpecsPanel from "./ProductSpecsPanel";
import ProductDeliveryReturnsPanel from "./ProductDeliveryReturnsPanel";
import ProductReviewsPanel from "./ProductReviewsPanel";

function ProductTabs({
  productDetails,
  mergedSpecs,
  reviews,
  isReviewsLoading,
}) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="w-full justify-start overflow-x-auto rounded-2xl bg-white border border-slate-100 shadow-sm px-2 py-1.5 gap-1 no-scrollbar">
        <TabsTrigger value="description" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 text-sm font-medium px-4 py-2">
          <Info className="h-4 w-4" />
          Açıklama
        </TabsTrigger>
        <TabsTrigger value="specs" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 text-sm font-medium px-4 py-2">
          <Ruler className="h-4 w-4" />
          Teknik Özellikler
        </TabsTrigger>
        <TabsTrigger value="delivery" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 text-sm font-medium px-4 py-2">
          <Truck className="h-4 w-4" />
          Teslimat & İade
        </TabsTrigger>
        <TabsTrigger value="reviews" className="gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 text-sm font-medium px-4 py-2">
          <MessageSquareText className="h-4 w-4" />
          Yorumlar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <ProductDescriptionPanel productDetails={productDetails} />
      </TabsContent>

      <TabsContent value="specs" className="mt-6">
        <ProductSpecsPanel mergedSpecs={mergedSpecs} />
      </TabsContent>

      <TabsContent value="delivery" className="mt-6">
        <ProductDeliveryReturnsPanel productDetails={productDetails} />
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <ProductReviewsPanel
          reviews={reviews}
          isLoading={isReviewsLoading}
        />
      </TabsContent>
    </Tabs>
  );
}

ProductTabs.propTypes = {
  productDetails: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  mergedSpecs: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string, value: PropTypes.string }),
  ).isRequired,
  reviews: PropTypes.array,
  isReviewsLoading: PropTypes.bool,
};

ProductTabs.defaultProps = {
  reviews: [],
  isReviewsLoading: false,
};

export default ProductTabs;

