import PropTypes from "prop-types";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import StarRatingComponent from "@/components/common/star-rating";

const DEFAULT_COLORS = [
  { name: "Siyah", hex: "#1a1a1a" },
  { name: "Beyaz", hex: "#f5f5f5" },
  { name: "Gece Mavisi", hex: "#1e3a5f" },
  { name: "Gümüş", hex: "#c0c0c0" },
  { name: "Mor", hex: "#7c3aed" },
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
          <span className="text-purple-600 font-medium text-xs bg-purple-50 px-2 py-0.5 rounded-md">
            {selectedVariants[attr.name] || "Seçiniz"}
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
                      ? "border-purple-500 ring-2 ring-purple-200 scale-110"
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
                      ? "border-purple-500 bg-purple-50 text-purple-700"
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
                    ? "border-purple-500 bg-purple-50 text-purple-700 shadow-sm"
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
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Brand / Vendor */}
        {productDetails.brand && (
          <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold border border-purple-100 tracking-wide uppercase">
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
            ({reviewCount} Yorum)
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Price */}
        <div className="flex items-end gap-3 flex-wrap">
          {productDetails.salePrice ? (
            <>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-5 py-2 rounded-2xl text-xl sm:text-2xl shadow-md">
                {formatPrice(productDetails.salePrice)} TL
              </span>
              <span className="line-through text-base sm:text-lg text-slate-400 mb-0.5">
                {formatPrice(productDetails.price)} TL
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-0.5">
                %{Math.round(((productDetails.price - productDetails.salePrice) / productDetails.price) * 100)} İndirim
              </span>
            </>
          ) : (
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-5 py-2 rounded-2xl text-xl sm:text-2xl shadow-md">
              {formatPrice(productDetails.price)} TL
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
        {productDetails.technicalSpecs && productDetails.technicalSpecs.some(s => ["Dimensions", "Capacity", "Material"].includes(s.key)) && (
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight">Key Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {productDetails.technicalSpecs
                .filter(s => ["Dimensions", "Capacity", "Material"].includes(s.key))
                .slice(0, 4)
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
               Lütfen sepete eklemeden önce tüm seçenekleri (varyantları) belirleyin.
             </div>
          )}
          
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <div className="flex items-center border border-slate-200 rounded-full px-1.5 sm:px-2 py-1 bg-slate-50/80">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 sm:h-9 sm:w-9 rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors"
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
                className="h-7 w-7 sm:h-9 sm:w-9 rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors"
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
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
              }`}
              onClick={() => onAddToCart({ ...productDetails, selectedVariants })}
              disabled={stock === 0 || (!allVariantsSelected && attributes.length > 0)}
              aria-label="Sepete ekle"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {stock === 0 ? "Stokta Yok" : "Sepete Ekle"}
              </span>
            </Button>
          </div>
        </div>

        {/* Stock + WhatsApp */}
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full ${
              stock > 0
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${stock > 0 ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
            {stock > 0 ? `Stokta: ${stock} adet` : "Stokta Yok"}
          </span>

          <Button
            variant="outline"
            className="ml-auto px-4 sm:px-5 text-sm sm:text-base border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 rounded-xl transition-all duration-200"
            onClick={onWhatsAppClick}
            disabled={stock === 0}
            aria-label="WhatsApp ile iletişim"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </span>
          </Button>
        </div>

        {/* Quick Feature Badges */}
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <Truck className="w-5 h-5 text-sky-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">Hızlı Teslimat</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">2 Yıl Garanti</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <RotateCcw className="w-5 h-5 text-amber-500" />
            <span className="text-[11px] text-slate-600 font-medium text-center leading-tight">Kolay İade</span>
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

