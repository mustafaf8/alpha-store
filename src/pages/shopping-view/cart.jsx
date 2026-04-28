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

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-slate-50 p-6 rounded-full mb-6">
          <ShoppingBag className="w-16 h-16 text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Cart is Empty</h2>
        <p className="text-slate-500 mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet. Discover our latest products and deals!
        </p>
        <Button onClick={() => navigate("/shop/home")} className="bg-jarir-blue hover:bg-jarir-blueHover text-white px-8 py-2 rounded-xl text-lg h-auto font-semibold">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-20 py-8 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-jarir-blue flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <span className="text-slate-300">|</span>
        <h1 className="text-2xl font-bold text-slate-800">Shopping Cart</h1>
        <span className="text-slate-500 font-medium">({cartItems.length} items)</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Cart Items */}
        <div className="flex-1 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header row for items */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/50 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-6">Product Details</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Item list */}
            <div className="divide-y divide-slate-100">
              {cartItems.map((item) => (
                <div key={item._id} className="p-4 sm:p-6 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                  
                  {/* Product Details (Image + Info) */}
                  <div className="col-span-6 flex items-start gap-4 w-full">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 p-2 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/shop/product/${item._id}/specs`)}>
                      <img
                        src={item.image || "/tutu.png"}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-purple-500 font-bold text-xs uppercase mb-1">
                        {item.brand?.name || item.brand || "Brand"}
                      </span>
                      <Link to={`/shop/product/${item._id}/specs`} className="text-slate-800 font-medium text-sm sm:text-base line-clamp-2 hover:text-jarir-blue transition-colors mb-2 leading-tight">
                        {item.title}
                      </Link>
                      
                      {/* Desktop only remove button */}
                      <button 
                        onClick={() => handleRemoveItem(item._id)}
                        className="hidden md:flex items-center gap-1 text-slate-400 hover:text-red-500 text-xs font-semibold mt-auto w-fit transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-2 flex items-center justify-between md:justify-center w-full md:w-auto border-t md:border-0 border-slate-100 pt-4 md:pt-0 mt-4 md:mt-0">
                    <span className="md:hidden text-slate-500 text-sm font-medium">Quantity:</span>
                    <div className="flex items-center bg-slate-50 rounded-lg border border-slate-200">
                      <button
                        onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                        className="p-2 hover:bg-slate-200 text-slate-600 rounded-l-lg transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-slate-800 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                        className="p-2 hover:bg-slate-200 text-slate-600 rounded-r-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 hidden md:block text-right">
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-slate-800">{formatPrice(item.salePrice || item.price || 0)} TL</span>
                      {item.price > (item.salePrice || item.price) && (
                        <span className="text-xs text-slate-400 line-through">{formatPrice(item.price)} TL</span>
                      )}
                    </div>
                  </div>

                  {/* Total & Mobile Remove */}
                  <div className="col-span-2 flex items-center justify-between md:justify-end w-full md:w-auto mt-2 md:mt-0">
                    <span className="md:hidden text-slate-500 text-sm font-medium">Total:</span>
                    <span className="font-extrabold text-purple-600 text-lg">{formatPrice((item.salePrice || item.price || 0) * item.quantity)} TL</span>
                    
                    {/* Mobile only remove button */}
                    <button 
                      onClick={() => handleRemoveItem(item._id)}
                      className="md:hidden p-2 text-slate-400 hover:text-red-500 bg-slate-50 rounded-lg transition-colors ml-4"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-slate-800">{formatPrice(subtotal)} TL</span>
              </div>
              
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                {shippingCost === 0 ? (
                  <span className="font-bold text-green-500">Free</span>
                ) : (
                  <span className="font-medium text-slate-800">{formatPrice(shippingCost)} TL</span>
                )}
              </div>
              
              {shippingCost > 0 && (
                <div className="text-xs text-jarir-blue bg-blue-50 p-2 rounded-lg mt-1 border border-blue-100">
                  Add items worth <span className="font-bold">{formatPrice(1000 - subtotal)} TL</span> more to get free shipping!
                </div>
              )}
            </div>
            
            <div className="border-t border-slate-200 pt-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="text-base font-bold text-slate-800">Total</span>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-extrabold text-purple-600">{formatPrice(total)} TL</span>
                  <span className="text-xs text-slate-400">Inclusive of VAT</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-jarir-blue hover:bg-jarir-blueHover text-white py-6 rounded-xl text-lg font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Button>
            
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
