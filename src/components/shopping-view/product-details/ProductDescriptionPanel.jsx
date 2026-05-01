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
          Description
        </div>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {productDetails?.description || "No description has been added for this product."}
        </p>
      </div>

      {highlights.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
            Highlights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((h, idx) => (
              <div
                key={`${h}-${idx}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 text-sm font-semibold shadow-sm hover:shadow-md hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300 group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 group-hover:border-purple-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </div>
                <span className="leading-tight">{h}</span>
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

