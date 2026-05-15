import PropTypes from "prop-types";
import { useMemo } from "react";

const FALLBACK_IMAGE = "/sub_woman/5.avif";

function ProductGallery({ productDetails, selectedImage, onSelectImage }) {
  const images = useMemo(() => {
    if (productDetails?.images?.length) return productDetails.images;
    return [];
  }, [productDetails]);

  const mainImage = selectedImage || productDetails?.image;

  return (
    <div className="min-w-0">
      <div className="relative bg-white border border-slate-100 rounded-2xl shadow-lg p-3 sm:p-4 group/gallery">
        {/* Decorative gradient accent */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full">
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:h-[340px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-100">
            <img
              src={mainImage}
              alt={productDetails?.title || "Product image"}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/gallery:scale-[1.02]"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
            {/* Inner shadow overlay for depth */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />

            {/* Thumbnails Overlay */}
            {images.length > 0 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-2xl max-w-[90%] overflow-x-auto no-scrollbar z-10 transition-all group-hover/gallery:bottom-4">
                <button
                  type="button"
                  className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white/80 flex items-center justify-center shadow-sm ${selectedImage === productDetails.image
                    ? "border-primary ring-2 ring-primary/20 scale-105"
                    : "border-transparent hover:border-white/60"
                    }`}
                  onClick={() => onSelectImage(productDetails.image)}
                  aria-label="Ana resim"
                >
                  <img
                    src={productDetails.image}
                    alt="Ana resim"
                    className="w-full h-full object-contain p-1"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </button>

                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white/80 flex items-center justify-center shadow-sm ${selectedImage === image
                      ? "border-primary ring-2 ring-primary/20 scale-105"
                      : "border-transparent hover:border-white/60"
                      }`}
                    onClick={() => onSelectImage(image)}
                    aria-label={`Resim ${index + 2}`}
                  >
                    <img
                      src={image}
                      alt={`Resim ${index + 2}`}
                      className="w-full h-full object-contain p-1"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Features (Quick Specs) Moved here for better layout balance */}
      {productDetails?.technicalSpecs && productDetails.technicalSpecs.some(s => 
        ["Dimensions", "Capacity", "Material", "Screen", "Battery", "Processor", "Storage", "OS", "Weight", "Warranty"].includes(s.key)
      ) && (
        <div className="mt-4 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-100 p-4 shadow-sm">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Key Features
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {productDetails.technicalSpecs
              .filter(s => ["Dimensions", "Capacity", "Material", "Screen", "Battery", "Processor", "Storage", "OS", "Weight", "Warranty"].includes(s.key))
              .slice(0, 6)
              .map((spec, i) => (
                <div key={i} className="flex flex-col bg-slate-50/50 border border-slate-100 p-2 rounded-xl transition-all hover:bg-white hover:shadow-sm">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{spec.key}</span>
                  <span className="text-[11px] font-black text-slate-700 truncate">{spec.value}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

ProductGallery.propTypes = {
  productDetails: PropTypes.shape({
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
  selectedImage: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
};

export default ProductGallery;
