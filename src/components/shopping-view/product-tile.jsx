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

const FALLBACK_IMAGE = "/tutu.png";

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
  const attributes = (product?.technicalSpecs 
    ? product.technicalSpecs.map(s => s.value) 
    : (product?.attributes || ["Premium", "Original"]))
    .sort((a, b) => a.toString().length - b.toString().length);

  // Calculate dynamic discount percentage
  let discountPercentage = 0;
  if (product?.price > product?.salePrice) {
    discountPercentage = Math.round(((product.price - product.salePrice) / product.price) * 100);
  }
  const discountText = discountPercentage > 0 ? `Extra ${discountPercentage}% discount` : "Best Price Guarantee";
  
  const salesCount = product?.salesCount || Math.floor(Math.random() * 500) + 10;
  const statusText = product?.totalStock > 0 ? "In Stock" : "Out of Stock";

  return (
    <div
      className="group relative isolate flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer p-3 pb-12"
      onClick={handleProductClick}
    >
      {/* Product Image area with Badges */}
      <div className="product-tile-image relative w-full flex-shrink-0 bg-white rounded-xl overflow-hidden">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
        />

        {/* Top Left Heart Icon */}
        <div className="absolute top-2 left-2 z-10">
          <button
            onClick={handleAction}
            className="bg-white/80 backdrop-blur-md border border-purple-100 p-2 rounded-xl text-slate-600 hover:text-purple-600 transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Top Right Status Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-blue-50/90 backdrop-blur-md text-blue-600 font-bold text-[10px] px-2 py-1 rounded-md tracking-wide">
            {statusText}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 relative z-0">
        {/* Vendor */}
        <span className="product-tile-vendor text-purple-500 font-bold text-xs truncate">
          {vendorName}
        </span>

        {/* Title */}
        <h2
          className="product-tile-title text-slate-800 text-sm font-medium line-clamp-2 leading-tight min-h-[40px]"
          title={product?.title}
        >
          {product?.title || "Product description, 2-line..."}
        </h2>

        {/* Attributes */}
        <div className="flex flex-nowrap overflow-hidden gap-1.5 mt-1">
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
        <div className="flex items-end gap-2 mt-2">
          <div className="bg-pink-500 text-white p-1 rounded self-start mt-1">
            <Percent className="w-3 h-3 max-[640px]:w-2 max-[640px]:h-2" />
          </div>
          <div className="flex flex-row max-[460px]:flex-col items-baseline max-[460px]:items-start gap-1.5">
            <span className="product-tile-price text-purple-500 font-extrabold text-lg leading-none order-2 max-[460px]:order-2">
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
        <div className="flex flex-col gap-1.5 mt-2 mb-2">
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
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-white via-white to-transparent translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (handleAddtoCart) handleAddtoCart(product._id, product.totalStock);
          }}
          className="product-tile-cart-btn w-full bg-jarir-blue hover:bg-jarir-blueHover text-white font-semibold py-2 rounded-xl transition-colors shadow-md"
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
