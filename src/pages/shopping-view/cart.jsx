import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "@/store/shop/cart-slice";
import { Button } from "@/components/ui/button";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.salePrice || item.price || 0) * item.quantity,
    0
  );

  // Example shipping cost logic: free over 1000 TL
  const shippingCost = subtotal > 1000 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shippingCost;

  const handleUpdateQuantity = (item, newQuantity) => {
    dispatch(updateQuantity({
      productId: item._id,
      cartItemKey: item.cartItemKey,
      quantity: newQuantity
    }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart({
      productId: item._id,
      cartItemKey: item.cartItemKey
    }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-primary/10 p-8 rounded-[40px] mb-8 shadow-xl shadow-primary/10">
          <ShoppingBag className="w-16 h-16 text-purple-300" />
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-3 uppercase tracking-tighter">Your Cart is Empty</h2>
        <p className="text-slate-500 mb-10 text-center max-w-sm font-medium leading-relaxed">
          Looks like you haven't added anything to your cart yet. Discover our latest products and deals!
        </p>
        <Button onClick={() => navigate("/shop/home")} className="bg-primary hover:bg-primary/90 text-white px-10 py-4 h-auto rounded-2xl text-lg font-black uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-primary/20">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-20 py-2 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 max-[768px]:hidden">
          <button
            onClick={() => navigate(-1)}
            className="p-2 sm:p-2.5 bg-white rounded-xl sm:rounded-2xl border border-slate-100 text-slate-500 hover:text-primary hover:border-primary/30 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div>
            <p className="text-[11px] sm:text-sm font-bold text-primary uppercase tracking-widest">
              {cartItems.length} Items Selected
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-10">
          {/* Left Column: Cart Items */}
          <div className="flex-1 space-y-4 sm:space-y-3">
            <div className="space-y-3 sm:space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemKey || item._id}
                  className="bg-white/60 backdrop-blur-md rounded-xl sm:rounded-[24px] border border-white/40 p-2 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center group transition-all hover:shadow-xl hover:bg-white/80"
                >
                  {/* Product Image */}
                  <div
                    className="w-full h-40 sm:w-28 sm:h-28 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden flex-shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                    onClick={() => navigate(`/shop/product/${item._id}/specs`)}
                  >
                    <img
                      src={item.image || "/tutu.png"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 min-w-0 w-full">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                          {item.brand || "Circle Store"}
                        </span>
                        <Link
                          to={`/shop/product/${item._id}/specs`}
                          className="block text-base sm:text-lg font-bold text-slate-800 leading-tight line-clamp-2 hover:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="p-1.5 sm:p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Selected Variants */}
                    {item.selectedVariants && Object.keys(item.selectedVariants).length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3 mt-1">
                        {Object.entries(item.selectedVariants).map(([key, val]) => (
                          <div key={key} className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                            <span className="text-[9px] font-black text-slate-400 uppercase">{key}:</span>
                            {val.startsWith("#") ? (
                              <div className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ backgroundColor: val }} />
                            ) : (
                              <span className="text-[10px] font-black text-slate-700">{val}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Category Path (Mini Breadcrumb) */}
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                      <span>{item.category || "General"}</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mt-auto">
                      {/* Quantity Controller */}
                      <div className="flex items-center bg-slate-100/50 p-1 rounded-xl sm:rounded-2xl border border-slate-100">
                        <button
                          onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-white hover:shadow-sm text-slate-600 rounded-lg sm:rounded-xl transition-all disabled:opacity-30"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-9 sm:w-10 text-center font-black text-slate-800 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-white hover:shadow-sm text-slate-600 rounded-lg sm:rounded-xl transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Pricing */}
                      <div className="flex flex-col items-end ml-auto">
                        <span className="text-lg sm:text-xl font-black text-slate-800">
                          {formatPrice((item.salePrice || item.price || 0) * item.quantity)} TL
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {formatPrice(item.salePrice || item.price || 0)} / unit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-[360px] flex-shrink-0">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-[32px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-4 sm:p-6 sticky top-20 sm:top-24">
              <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-tight mb-4 sm:mb-6">Summary</h2>

              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                <div className="flex justify-between items-center text-[10px] sm:text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-widest">Subtotal</span>
                  <span className="font-black text-slate-800">{formatPrice(subtotal)} TL</span>
                </div>

                <div className="flex justify-between items-center text-[10px] sm:text-xs">
                  <span className="font-bold text-slate-400 uppercase tracking-widest">Delivery</span>
                  {shippingCost === 0 ? (
                    <span className="font-black text-green-500 uppercase tracking-widest">Free</span>
                  ) : (
                    <span className="font-black text-slate-800">{formatPrice(shippingCost)} TL</span>
                  )}
                </div>

                {shippingCost > 0 && (
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-primary/20">
                    <p className="text-[11px] font-bold text-primary leading-relaxed text-center">
                      Add <span className="text-sm font-black underline">{formatPrice(1000 - subtotal)} TL</span> more for <span className="uppercase">Free Delivery</span>
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-4 sm:pt-5 mb-5 sm:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-tight">Total</span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-3xl font-black text-primary tracking-tighter">
                      {formatPrice(total)} TL
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tax Included</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 sm:h-16 rounded-2xl sm:rounded-[24px] text-base sm:text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all active:scale-95 group">
                Checkout Now
                <ArrowLeft className="w-5 h-5 rotate-180 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-bold text-slate-400 justify-center uppercase tracking-widest">
                <div className="w-8 h-px bg-slate-100" />
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.597 9.181-6.5 11.5a11.954 11.954 0 01-11.5-11.5c0-.68.056-1.35.166-2.001zm11.548 4.325a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Secure Payment
                </span>
                <div className="w-8 h-px bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
