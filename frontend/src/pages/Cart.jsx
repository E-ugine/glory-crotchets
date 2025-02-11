import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"; // Import action

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-3 gap-10 p-4">
        <div className="lg:col-span-2 bg-white divide-y">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-4">
                <div className="w-32 h-full">
                  <img src={item.images?.[0] || "/placeholder.jpg"} alt={item.title} className="w-full object-contain" />
                </div>

                <div className="flex items-start gap-4 w-full">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">{item.title}</h3>
                    <h6 className="text-sm text-gray-800">Size: <strong className="ml-2">{item.size || "N/A"}</strong></h6>
                    <h6 className="text-sm text-gray-800">Color: <strong className="ml-2">{item.color || "N/A"}</strong></h6>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="font-semibold text-red-500 text-sm flex items-center gap-2 mt-4"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="ml-auto text-right">
                    <h4 className="text-base font-bold text-gray-800">${item.price?.toFixed(2)}</h4>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
