import PropTypes from "prop-types";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import StarRatingComponent from "@/components/common/star-rating";

const DEFAULT_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#f5f5f5" },
  { name: "Navy Blue", hex: "#1e3a5f" },
  { name: "Silver", hex: "#c0c0c0" },
  { name: "Purple", hex: "#7c3aed" },
];

function PurchaseCard({
  productDetails,
  quantity,
  setQuantity,
  onAddToCart,
  onWhatsAppClick,
}) {
  const stock = productDetails?.totalStock || 0;
  const rating = productDetails?.averageReview || 0;
  const reviewCount = productDetails?.numReviews || 0;

  // 1. Normalize Attributes from various possible backend structures
  const normalizeAttributes = () => {
    let attrs = [];
    if (productDetails?.attributes && Array.isArray(productDetails.attributes) && productDetails.attributes.length > 0) {
      attrs = productDetails.attributes; 
    } else if (productDetails?.variantOptions && typeof productDetails.variantOptions === "object" && Object.keys(productDetails.variantOptions).length > 0) {
      attrs = Object.entries(productDetails.variantOptions).map(([name, options]) => ({ name, options }));
    } else if (productDetails?.attributes && typeof productDetails.attributes === "object" && Object.keys(productDetails.attributes).length > 0) {
      attrs = Object.entries(productDetails.attributes).map(([name, options]) => ({ name, options }));
    }
    // Filter out empty options
    return attrs.filter(attr => Array.isArray(attr.options) && attr.options.length > 0);
  };

  const attributes = normalizeAttributes();

  // 2. State for selected variants
  // Auto-select if there's only one option for an attribute
  const initialSelections = {};
  attributes.forEach(attr => {
    if (attr.options.length === 1) {
      initialSelections[attr.name] = typeof attr.options[0] === "object" ? attr.options[0].name : attr.options[0];
    }
  });

  const [selectedVariants, setSelectedVariants] = useState(initialSelections);

  const handleVariantSelect = (attrName, option) => {
    const label = typeof option === "object" ? option.name : option;
    setSelectedVariants(prev => ({ ...prev, [attrName]: label }));
  };

  const allVariantsSelected = attributes.every(attr => selectedVariants[attr.name]);

  const resolveColorHex = (colorOption) => {
    if (typeof colorOption === "object" && colorOption.hex) return colorOption.hex;
    const name = typeof colorOption === "object" ? colorOption.name : colorOption;
    if (typeof name === "string" && name.startsWith("#")) return name;
    const match = DEFAULT_COLORS.find((dc) => dc.name.toLowerCase() === name.toLowerCase());
    return match ? match.hex : "#d1d5db";
  };

  // Render specific UI based on attribute type
  const renderAttributeUI = (attr) => {
    const nameLower = attr.name.toLowerCase();
    const isColor = nameLower.includes("renk") || nameLower.includes("color");
    const isSize = nameLower.includes("beden") || nameLower.includes("size");
    
    return (
      <div key={attr.name} className="mb-4 last:mb-0">
        <div className="text-sm font-semibold text-gray-700 mb-2.5 flex items-center justify-between">
          <span>{attr.name}</span>
          <span className="text-primary font-medium text-xs bg-primary/10 px-2 py-0.5 rounded-md">
            {selectedVariants[attr.name] || "Select"}
          </span>
        </div>
        
        <div className="flex items-center gap-2.5 flex-wrap">
          {attr.options.map((opt, idx) => {
            const label = typeof opt === "object" ? opt.name : opt;
            const isSelected = selectedVariants[attr.name] === label;
            
            if (isColor) {
              const hex = resolveColorHex(opt);
              return (
                <button
                  key={label + idx}
                  type="button"
                  onClick={() => handleVariantSelect(attr.name, opt)}
                  className={`w-9 h-9 rounded-full border-2 transition-all duration-200 shadow-sm hover:scale-110 ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/20 scale-110"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                  style={{ backgroundColor: hex }}
                  aria-label={`${attr.name}: ${label}`}
                  title={label}
                />
              );
            }
            
            if (isSize) {
              return (
                <button
                  key={label + idx}
                  type="button"
                  onClick={() => handleVariantSelect(attr.name, opt)}
                  className={`min-w-[40px] h-10 px-3 rounded-lg border-2 font-semibold text-sm transition-all duration-200 flex items-center justify-center ${
                    isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </button>
              );
            }
            
            // Storage, RAM or any other text type
            return (
              <button
                key={label + idx}
                type="button"
                onClick={() => handleVariantSelect(attr.name, opt)}
                className={`px-4 py-2 rounded-xl border-2 font-medium text-sm transition-all duration-200 ${
                  isSelected
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-0 h-full">
      <div className="relative bg-white border border-slate-100 rounded-3xl shadow-lg p-5 sm:p-8 h-full flex flex-col gap-5 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/20 to-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Brand / Vendor */}
        {productDetails.brand && (
          <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 tracking-wide uppercase">
            {productDetails.brand}
          </span>
        )}

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight break-words">
          {productDetails.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <StarRatingComponent rating={rating} size={24} />
          <span className="text-sm font-semibold text-gray-700">
            {rating ? rating.toFixed(1) : "0.0"}
          </span>
          <span className="text-sm text-slate-400">
            ({reviewCount} Reviews)
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
              stock > 0
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "bg-red-50 text-red-700 border border-red-100"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${stock > 0 ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
            {stock > 0 ? `In Stock: ${stock} Units` : "Out of Stock"}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Price */}
        <div className="flex items-end gap-3 flex-wrap">
          {productDetails.salePrice ? (
            <>
              <span className="bg-primary text-white font-bold px-5 py-2 rounded-2xl text-xl sm:text-2xl shadow-md">
                {formatPrice(productDetails.salePrice)}
              </span>
              <span className="line-through text-base sm:text-lg text-slate-400 mb-0.5">
                {formatPrice(productDetails.price)}
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-0.5">
                {Math.round(((productDetails.price - productDetails.salePrice) / productDetails.price) * 100)}% Off
              </span>
            </>
          ) : (
            <span className="bg-primary text-white font-bold px-5 py-2 rounded-2xl text-xl sm:text-2xl shadow-md">
              {formatPrice(productDetails.price)}
            </span>
          )}
        </div>

        {/* Dynamic Attributes Mapping */}
        {attributes.length > 0 && (
          <div className="flex flex-col gap-1">
            {attributes.map(attr => renderAttributeUI(attr))}
          </div>
        )}

        {/* Key Features (Quick Specs) */}
        {productDetails.technicalSpecs && productDetails.technicalSpecs.some(s => 
          ["Dimensions", "Capacity", "Material", "Screen", "Battery", "Processor", "Storage", "OS", "Weight", "Warranty"].includes(s.key)
        ) && (
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight">Key Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {productDetails.technicalSpecs
                .filter(s => ["Dimensions", "Capacity", "Material", "Screen", "Battery", "Processor", "Storage", "OS", "Weight", "Warranty"].includes(s.key))
                .slice(0, 6)
                .map((spec, i) => (
                  <div key={i} className="flex flex-col bg-slate-50/80 border border-slate-100 p-2.5 rounded-2xl">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{spec.key}</span>
                    <span className="text-xs font-extrabold text-slate-700 truncate">{spec.value}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Quantity + Add to Cart */}
        <div className="flex flex-col gap-3">
          {!allVariantsSelected && attributes.length > 0 && (
             <div className="text-xs text-red-500 font-medium bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 inline-block self-start">
               Please select all options (variants) before adding to cart.
             </div>
          )}
          
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <div className="flex items-center border border-slate-200 rounded-full px-1.5 sm:px-2 py-1 bg-slate-50/80">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 sm:h-9 sm:w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                disabled={quantity <= 1}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
              <span className="font-bold w-8 sm:w-10 text-center text-base sm:text-lg text-gray-800">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 sm:h-9 sm:w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                disabled={quantity >= stock}
                onClick={() =>
                  setQuantity((q) => Math.min(stock, q + 1))
                }
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
            </div>

            <Button
              className={`flex-1 min-w-0 max-w-72 text-sm sm:text-base font-semibold py-3 sm:py-3.5 rounded-xl transition-all duration-300 ${
                stock === 0 || (!allVariantsSelected && attributes.length > 0)
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                  : "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30"
              }`}
              onClick={() => onAddToCart({ ...productDetails, selectedVariants })}
              disabled={stock === 0 || (!allVariantsSelected && attributes.length > 0)}
              aria-label="Add to cart"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {stock === 0 ? "Out of Stock" : "Add to Cart"}
              </span>
            </Button>
          </div>
        </div>

        {/* Stock + WhatsApp */}
        <div className="flex items-center gap-3 flex-wrap">

        </div>

        {/* Quick Feature Badges */}
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <Truck className="w-5 h-5 text-sky-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">2-Year Warranty</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <RotateCcw className="w-5 h-5 text-amber-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

PurchaseCard.propTypes = {
  productDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    salePrice: PropTypes.number,
    totalStock: PropTypes.number,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onWhatsAppClick: PropTypes.func.isRequired,
};

export default PurchaseCard;

