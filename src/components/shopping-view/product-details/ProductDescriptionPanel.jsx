import PropTypes from "prop-types";

function ProductDescriptionPanel({ productDetails }) {
  const highlights = Array.isArray(productDetails?.highlights)
    ? productDetails.highlights
    : [];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
          Açıklama
        </div>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {productDetails?.description || "Bu ürün için açıklama eklenmemiş."}
        </p>
      </div>

      {highlights.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
            Öne Çıkanlar
          </div>
          <div className="flex flex-wrap gap-3">
            {highlights.map((h, idx) => (
              <div
                key={`${h}-${idx}`}
                className="flex items-center justify-center p-4 min-w-[140px] flex-1 sm:flex-none aspect-square rounded-2xl bg-purple-50 border border-purple-100 text-purple-800 text-center text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {h}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ProductDescriptionPanel.propTypes = {
  productDetails: PropTypes.shape({
    description: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductDescriptionPanel;

