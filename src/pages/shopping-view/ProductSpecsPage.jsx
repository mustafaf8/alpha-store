import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "@/api/axiosInstance";
import { fetchProductDetails } from "@/store/shop/products-slice";
import { addToCart } from "@/store/shop/cart-slice";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import ProductGallery from "@/components/shopping-view/product-details/ProductGallery";
import PurchaseCard from "@/components/shopping-view/product-details/PurchaseCard";
import ProductTabs from "@/components/shopping-view/product-details/ProductTabs";
import { buildMergedSpecs } from "@/components/shopping-view/product-details/specs-utils";
import { fetchAllCategories } from "@/store/common-slice/categories-slice";
import { ChevronRight, Home } from "lucide-react";
import { translateCategoryName } from "@/lib/taxonomy-translations";

function ProductSpecsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productDetails, isLoading } = useSelector((state) => state.shopProducts);

  const { toast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);

  useEffect(() => {
    if (id) dispatch(fetchProductDetails(id));
    dispatch(fetchAllCategories());
  }, [id, dispatch]);

  const { categoryList } = useSelector((state) => state.categories || { categoryList: [] });

  const breadcrumbs = useMemo(() => {
    if (!productDetails?.category || !categoryList?.length) return [];
    
    const findPath = (cats, slug, path = []) => {
      for (const cat of cats) {
        if (cat.slug === slug) return [...path, cat];
        if (cat.children?.length) {
          const subPath = findPath(cat.children, slug, [...path, cat]);
          if (subPath) return subPath;
        }
      }
      return null;
    };

    return findPath(categoryList, productDetails.category) || [];
  }, [productDetails, categoryList]);

  useEffect(() => {
    if (productDetails?.image) setSelectedImage(productDetails.image);
  }, [productDetails]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;
    setIsReviewsLoading(true);

    api
      .get(`/shop/review/${id}`)
      .then((res) => {
        if (cancelled) return;
        const payload = res?.data;
        setReviews(Array.isArray(payload?.data) ? payload.data : []);
      })
      .catch(() => {
        if (cancelled) return;
        setReviews([]);
      })
      .finally(() => {
        if (cancelled) return;
        setIsReviewsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  // Since catalog.js already enriches products (highlights, delivery, returns, warranty, colors),
  // we can use productDetails directly without polluting it with fake fallback attributes!
  const enrichedProduct = productDetails || null;

  const mergedSpecs = useMemo(
    () => (enrichedProduct ? buildMergedSpecs(enrichedProduct) : []),
    [enrichedProduct],
  );

  const handleAddToCart = (productToAdd) => {
    const product = productToAdd || productDetails;
    if (!product) return;
    if ((product?.totalStock || 0) === 0) return;

    dispatch(addToCart({ product, quantity }));
    toast({
      title: "Added to cart",
      description: `${product.title} (${quantity} units)`,
      variant: "success",
    });
  };

  const handleWhatsAppClick = () => {
    if (!productDetails) return;
    const price = formatPrice(productDetails?.salePrice || productDetails?.price || 0);
    const message =
      `Hello, I would like to buy ${quantity} unit(s) of ${productDetails.title}. ` +
      `Price: ${price}. Could you assist me?`;

    window.open(
      `https://wa.me/905347168754?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 animate-pulse">
          <div className="flex-1 flex flex-col gap-4">
            <Skeleton className="h-96 w-full rounded-3xl" />
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-16 rounded-xl" />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Skeleton className="h-10 w-3/4 rounded-xl" />
            <Skeleton className="h-8 w-1/2 rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-10 w-1/2 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found.</h1>
        <Button
          onClick={() => navigate("/shop/home")}
          className="mt-3 text-base"
          aria-label="Back to Home"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/40 pointer-events-none" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 shop-container mx-auto py-6 max-[1024px]:px-3">
        {/* Breadcrumb */}
        <nav className="flex items-center flex-wrap gap-2 text-sm text-slate-500 mb-8 px-1">
          <button 
            onClick={() => navigate("/shop/home")} 
            className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium text-slate-400"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb._id} className="flex items-center gap-2">
              <button
                onClick={() => navigate(`/shop/listing?category=${crumb.slug}`)}
                className="hover:text-primary transition-colors font-medium"
              >
                {translateCategoryName(crumb.name, crumb.slug)}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </div>
          ))}
          
          <span className="text-slate-700 font-bold truncate max-w-[280px]">
            {productDetails.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <ProductGallery
            productDetails={enrichedProduct}
            selectedImage={selectedImage}
            onSelectImage={setSelectedImage}
          />
          <PurchaseCard
            productDetails={enrichedProduct}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
            onWhatsAppClick={handleWhatsAppClick}
          />
        </div>

        <div className="mt-8">
          <ProductTabs
            productDetails={enrichedProduct}
            mergedSpecs={mergedSpecs}
            reviews={reviews}
            isReviewsLoading={isReviewsLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSpecsPage;
