import React from "react";
import PropTypes from "prop-types";
import { cn, formatPrice } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Percent,
  Ticket,
  ShoppingBag,
  Star,
} from "lucide-react";

const FALLBACK_IMAGE = "/sub_woman/5.avif";

const ShoppingProductTile = React.memo(function ShoppingProductTile({
  product,
  handleAddtoCart,
}) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    if (!product?._id) return;
    navigate(`/shop/product/${product._id}/specs`);
  };

  const handleAction = (e) => {
    e.stopPropagation();
    // Action handler logic here
  };

  // Extract unique data from product object
  const vendorName = product?.brand?.name || product?.brand || "Premium Brand";

  // Extract attributes from technicalSpecs or fallback to simple strings
  const attributes = (
    product?.technicalSpecs
      ? product.technicalSpecs.map((s) => s.value)
      : product?.attributes || ["Premium", "Original"]
  ).sort((a, b) => a.toString().length - b.toString().length);

  // Calculate dynamic discount percentage
  let discountPercentage = 0;
  if (product?.price > product?.salePrice) {
    discountPercentage = Math.round(
      ((product.price - product.salePrice) / product.price) * 100,
    );
  }
  const discountText =
    discountPercentage > 0
      ? `Extra ${discountPercentage}% discount`
      : "Best Price Guarantee";

  const salesCount =
    product?.salesCount || Math.floor(Math.random() * 500) + 10;
  const statusText = product?.totalStock > 0 ? "In Stock" : "Out of Stock";

  return (
    <div
      className="group relative isolate flex flex-col bg-white rounded-desktop max-md:rounded-mobile border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer p-3 pb-12"
      onClick={handleProductClick}
    >
      {/* Product Image area with Badges */}
      <div className="product-tile-image relative z-0 w-[calc(100%+1.5rem)] -mx-3 -mt-3 flex-shrink-0 bg-white overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="relative z-0 w-full h-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
        />

        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Top Left Heart Icon */}
          <div className="absolute top-1 left-1 z-10 max-[720px]:top-0.5 max-[720px]:left-0.5">
            <button
              onClick={handleAction}
              className="pointer-events-auto bg-white border border-slate-200 p-2 max-[720px]:p-1.5 rounded-desktop max-[720px]:rounded-mobile text-slate-600 hover:text-primary transition-colors"
            >
              <Heart className="w-4 h-4 max-[720px]:w-3.5 max-[720px]:h-3.5" />
            </button>
          </div>

          {/* Top Right Status Badge */}
          <div className="absolute top-1 right-1 z-10 max-[720px]:top-0.5 max-[720px]:right-0.5">
            <span className="bg-white border border-slate-200 text-primary font-bold text-[10px] max-[720px]:text-[8px] px-2 py-1 max-[720px]:px-1.5 max-[720px]:py-0.5 rounded-md max-[720px]:rounded-sm tracking-wide">
              {statusText}
            </span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1.5 relative z-0">
        {/* Vendor */}
        <span className="product-tile-vendor text-primary font-bold text-xs truncate">
          {vendorName}
        </span>

        {/* Title */}
        <h2
          className="product-tile-title text-slate-800 text-sm font-bold line-clamp-2 leading-[1.2] max-h-[2.4em] overflow-hidden pr-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
          title={product?.title}
        >
          {product?.title || "Product Title"}
        </h2>

        {/* Attributes */}
        <div className="flex flex-nowrap overflow-hidden gap-1 mt-0.5">
          {attributes.slice(0, 6).map((attr, idx) => (
            <span
              key={idx}
              className="product-tile-attr flex-shrink-0 whitespace-nowrap border border-slate-200 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded"
            >
              {attr}
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-end gap-1.5 mt-1.5">
          <div className="bg-primary text-white p-1 rounded self-start mt-1">
            <Percent className="w-3 h-3 max-[640px]:w-2 max-[640px]:h-2" />
          </div>
          <div className="flex flex-row max-[460px]:flex-col items-baseline max-[460px]:items-start gap-1.5">
            <span className="product-tile-price text-primary font-extrabold text-lg leading-none order-2 max-[460px]:order-2">
              {formatPrice(product?.salePrice || product?.price || 1600)}
            </span>
            {(product?.price > product?.salePrice || !product?.salePrice) && (
              <span className="product-tile-price-old text-slate-400 text-xs line-through font-medium leading-none order-1 max-[460px]:order-1">
                {formatPrice(product?.price || 1200)}
              </span>
            )}
          </div>
        </div>

        {/* Extra Info */}
        <div className="flex flex-col gap-1 mt-1.5 mb-1">
          <div className="flex items-center gap-2">
            <Ticket className="w-3.5 h-3.5 text-green-500 product-tile-badge-icon" />
            <span className="product-tile-extra text-slate-800 text-xs font-semibold">
              {discountText}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingBag className="product-tile-badge-icon w-3.5 h-3.5 text-yellow-500 fill-yellow-400" />
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-[1px] border border-white">
                <svg
                  className="w-1.5 h-1.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <span className="product-tile-extra text-slate-800 text-xs font-semibold">
              +{salesCount} pieces sales
            </span>
          </div>
        </div>
      </div>

      {/* Hover Add to Cart Button */}
      <div className="absolute bottom-0 left-0 w-full p-1.5 sm:p-2 bg-gradient-to-t from-white via-white to-transparent translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleProductClick();
          }}
          className="product-tile-cart-btn w-full bg-primary hover:bg-primary/90 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider py-1.5 sm:py-2 rounded-mobile sm:rounded-desktop transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

ShoppingProductTile.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    totalStock: PropTypes.number,
    averageReview: PropTypes.number,
    brand: PropTypes.any,
    attributes: PropTypes.array,
    discountText: PropTypes.string,
    salesCount: PropTypes.number,
    status: PropTypes.string,
  }),
};

export default ShoppingProductTile;
