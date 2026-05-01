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
      <div className="relative bg-white border border-slate-100 rounded-3xl shadow-lg p-4 sm:p-6 group/gallery">
        {/* Decorative gradient accent */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full">
          <div className="relative w-full aspect-square sm:aspect-[4/3] md:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-100">
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
          </div>
        </div>

        {images.length > 0 && (
          <div className="mt-5 flex gap-2.5 overflow-x-auto no-scrollbar pt-2 px-1 pb-1 items-center justify-center">
            <button
              type="button"
              className={`flex-shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white flex items-center justify-center shadow-sm hover:shadow-md ${
                selectedImage === productDetails.image
                  ? "border-purple-500 ring-2 ring-purple-200 scale-105"
                  : "border-slate-200 hover:border-purple-300"
              }`}
              onClick={() => onSelectImage(productDetails.image)}
              aria-label="Ana resim"
            >
              <img
                src={productDetails.image}
                alt="Ana resim"
                className="w-full h-full object-contain p-1.5"
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
                className={`flex-shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white flex items-center justify-center shadow-sm hover:shadow-md ${
                  selectedImage === image
                    ? "border-purple-500 ring-2 ring-purple-200 scale-105"
                    : "border-slate-200 hover:border-purple-300"
                }`}
                onClick={() => onSelectImage(image)}
                aria-label={`Resim ${index + 2}`}
              >
                <img
                  src={image}
                  alt={`Resim ${index + 2}`}
                  className="w-full h-full object-contain p-1.5"
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
