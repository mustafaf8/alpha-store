import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import StarRatingComponent from "../common/star-rating";
import PropTypes from "prop-types";
import { cn, formatPrice } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE = "/tutu.png";

const ShoppingProductTile = React.memo(function ShoppingProductTile({
  product,
}) {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    if (!product?._id) return;
    const price = formatPrice(product?.salePrice || product?.price || 0);
    const message =
      `Hello, I'm interested in ${product.title}. ` +
      `Price: ${price} TL. Can I get more details?`;
    window.open(
      `https://wa.me/905347168754?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleProductClick = () => {
    if (!product?._id) return;
    navigate(`/shop/product/${product._id}/specs`);
  };

  return (
    <Card className="shop-product-card h-full hover:shadow-md flex flex-col justify-between">
      <div className="relative flex flex-col flex-grow">
        {/* Product image with badges */}
        <div onClick={handleProductClick} className="cursor-pointer">
          <div className="relative overflow-hidden">
            <div className="h-[180px] sm:h-[200px] md:h-[220px] w-full flex items-center justify-center bg-secondary/20 p-2">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300 rounded-md"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            </div>

          </div>

          {/* Product details */}
          <CardContent className="p-3 space-y-1.5 flex-grow">
            <h2
              className="text-sm font-medium line-clamp-2"
              title={product?.title}
            >
              {product?.title}
            </h2>

            {/* Ratings */}
            {product?.averageReview !== undefined && (
              <div className="flex items-center space-x-0 pointer-events-none max-[640px]:space-x-1">
                <StarRatingComponent
                  rating={product.averageReview}
                  className="scale-90 origin-left"
                />
                <span className="text-xs text-muted-foreground">
                  ({product.averageReview.toFixed(1)})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="pt-1 max-[640px]:pt-0">
              {product?.salePrice !== undefined &&
              product.salePrice !== null ? (
                <div className="flex flex-col gap-1">
                  {product?.price &&
                    product.price > 0 &&
                    product.price > product.salePrice && (
                      <span className="line-through text-xs sm:text-sm text-gray-400 break-words">
                        {`${formatPrice(product.price)} TL`}
                      </span>
                    )}
                  <span
                    className={cn(
                      "font-medium text-sm sm:text-base break-words",
                      product?.price &&
                        product.price > 0 &&
                        product.price > product.salePrice
                        ? "text-green-600"
                        : "text-black",
                    )}
                  >
                    {`${formatPrice(product.salePrice)} TL`}
                  </span>
                </div>
              ) : product?.price && product.price > 0 ? (
                <span className="font-medium text-sm sm:text-base text-black break-words">
                  {`${formatPrice(product.price)} TL`}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">
                  Price unavailable
                </span>
              )}
            </div>
          </CardContent>
        </div>
      </div>

      {/* Action buttons */}
      <CardFooter className="p-3 pt-0 mt-auto flex-shrink-0">
        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center gap-1.5 h-9"
          aria-label="Contact via WhatsApp"
        >
          <span className="text-sm">WhatsApp</span>
        </Button>
      </CardFooter>
    </Card>
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
  }),
};

export default ShoppingProductTile;
