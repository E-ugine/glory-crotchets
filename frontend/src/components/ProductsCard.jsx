import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductsCard({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="font-[sans-serif] bg-[#eeecec] p-4 mx-auto w-full h-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="group overflow-hidden cursor-pointer relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="bg-gray-100 w-full overflow-hidden">
                <img
                  src={product.images?.[0] || "/placeholder.jpg"}
                  alt={product.name}
                  className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>
            </Link>

            <div className="p-4 relative">
              <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
                transition-all duration-500 left-0 right-0 group-hover:bottom-20
                lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
                max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-sky-500 w-5 h-5 inline-block" viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86A18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4Z" />
                  </svg>
                </button>

                {/* Add to Cart Button */}
                <button
  type="button"
  title="Add to cart"
  className="bg-transparent outline-none border-none"
  onClick={(e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`); // Simple feedback
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-800 w-5 h-5 inline-block" viewBox="0 0 512 512">
    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180z" />
  </svg>
</button>

              </div>

              <div className="z-20 relative bg-[#eeecec]">
                <h6 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h6>
                <h6 className="text-sm text-gray-600 mt-2">${product.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
