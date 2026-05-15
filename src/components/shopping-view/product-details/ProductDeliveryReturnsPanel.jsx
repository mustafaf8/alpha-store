import PropTypes from "prop-types";
import { Package, Truck, RotateCcw, Shield } from "lucide-react";

function ProductDeliveryReturnsPanel({ productDetails }) {
  const delivery = productDetails?.delivery;
  const returns = productDetails?.returns;
  const warranty = productDetails?.warranty;
  const inTheBox = Array.isArray(productDetails?.inTheBox)
    ? productDetails.inTheBox
    : [];

  const mainCities = Array.isArray(delivery?.mainCities)
    ? delivery.mainCities
    : [];
  const otherCities = delivery?.otherCities || [];

  const etaMain = delivery?.etaMainDays;
  const etaOther = delivery?.etaOtherDays;

  const deliveryText =
    etaMain && mainCities.length > 0
      ? `Major cities: ${mainCities.slice(0, 3).join(", ")}${
          mainCities.length > 3 ? "..." : ""
        } — ${etaMain} days`
      : delivery?.message || "Delivery information is unavailable.";

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-md">
            <Truck className="h-5 w-5 text-white" />
          </div>
          <div className="text-lg font-bold text-gray-900">Delivery</div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {deliveryText}
        </p>

        {Array.isArray(otherCities) && otherCities.length > 0 && (
          <div className="mt-5 text-sm text-slate-600">
            <div className="font-semibold mb-3 text-gray-800">Other cities</div>
            <div className="flex flex-wrap gap-2">
              {otherCities.slice(0, 6).map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
            {etaOther ? <div className="mt-2 text-slate-500">Estimated: {etaOther} days</div> : null}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
              <RotateCcw className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">Returns & Exchanges</div>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {returns?.message || returns || "Returns/Exchanges information is unavailable."}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 shadow-md">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">Warranty</div>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {warranty?.message || warranty || "Warranty information is unavailable."}
          </p>
        </div>
      </div>

      {inTheBox.length > 0 && (
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md">
              <Package className="h-5 w-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">In the Box</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {inTheBox.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ProductDeliveryReturnsPanel.propTypes = {
  productDetails: PropTypes.shape({
    delivery: PropTypes.any,
    returns: PropTypes.any,
    warranty: PropTypes.any,
    inTheBox: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductDeliveryReturnsPanel;

