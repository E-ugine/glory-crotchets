import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom"; 
import { addToWishlist } from "../redux/wishlistSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="font-sans max-w-10xl max-md:max-w-xl mx-auto bg-[#eeecec] py-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-3 items-start gap-4">
                <div className="col-span-2 flex items-start gap-4">
                  <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                    <img src={item.images[0]} className="w-full h-full object-contain" alt={item.name} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5">Size: {item.size}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-4">
                      <button 
                        className="px-2 py-1 bg-gray-200 rounded-md" 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 bg-gray-200 rounded-md" 
                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      >
                        +
                      </button>
                    </div>

                    {/* Remove and Wishlist Buttons */}
                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        className="font-semibold text-red-500 text-xs flex items-center gap-1"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        🗑 REMOVE
                      </button>
                      <button
                        type="button"
                        className="font-semibold text-blue-500 text-xs flex items-center gap-1"
                        onClick={() => dispatch(addToWishlist(item))}
                      >
                        ❤️ ADD TO WISHLIST
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="text-lg max-sm:text-base font-bold text-gray-800">${item.price}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="space-y-8 mt-4 max-md:mt-8">
            <div className="border p-6 rounded-md bg-[#eeecec] space-y-5">
              <h2 className="font-semibold text-base text-gray-800">Summary</h2>
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-600">Subtotal:</p>
                <p className="font-semibold text-lg text-gray-800">
                  ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-600">Shipping:</p>
                <p className="font-semibold text-lg text-gray-800">Free</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-600">Total:</p>
                <p className="font-semibold text-lg text-gray-800">
                  ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                </p>
              </div>
            </div>

            <button type="button" className="w-full py-4 font-semibold text-white bg-sky-500 rounded-md">
              Make Payment
            </button>

            {/* Continue Shopping Button */}
            <button 
              type="button" 
              className="w-full py-4 font-semibold text-white bg-sky-500 rounded-md"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
