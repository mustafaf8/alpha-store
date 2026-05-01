import PropTypes from "prop-types";
import { Star, MessageSquareText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function Stars({ rating }) {
  const value = Number(rating || 0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= Math.round(value) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString();
}

function ProductReviewsPanel({ reviews, isLoading }) {
  const safeReviews = Array.isArray(reviews) ? reviews : [];

  const avg =
    safeReviews.length > 0
      ? safeReviews.reduce((acc, r) => acc + (r.rating || 0), 0) / safeReviews.length
      : 0;

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64 rounded-xl" />
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (safeReviews.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mb-4">
          <MessageSquareText className="h-8 w-8 text-purple-400" />
        </div>
        <div className="text-gray-800 font-semibold text-base">No reviews yet</div>
        <div className="text-slate-400 text-sm mt-1.5">Be the first to leave a review.</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
              Reviews
            </div>
            <div className="text-sm text-slate-500 mt-1.5">
              Ortalama: <span className="font-semibold text-gray-700">{avg.toFixed(1)}</span> / 5
            </div>
          </div>
          <div>
            <Stars rating={avg} />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {safeReviews.map((r, idx) => (
          <div
            key={`${r.user?.name || "user"}-${idx}`}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white text-sm font-bold">
                    {(r.user?.name || "M")[0].toUpperCase()}
                  </div>
                  <div className="font-semibold text-gray-900">{r.user?.name || "Customer"}</div>
                  {r.verified && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200 font-medium">
                      Verified
                    </span>
                  )}
                </div>
                <div className="mt-2 ml-10">
                  <Stars rating={r.rating} />
                </div>
              </div>
              <div className="text-xs text-slate-400 whitespace-nowrap">{formatDate(r.createdAt)}</div>
            </div>
            {r.comment && (
              <p className="text-slate-600 text-sm sm:text-base mt-4 ml-10 leading-relaxed">
                {r.comment}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

ProductReviewsPanel.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string,
      }),
      rating: PropTypes.number,
      comment: PropTypes.string,
      createdAt: PropTypes.string,
      verified: PropTypes.bool,
    }),
  ),
  isLoading: PropTypes.bool,
};

ProductReviewsPanel.defaultProps = {
  reviews: [],
  isLoading: false,
};

export default ProductReviewsPanel;

