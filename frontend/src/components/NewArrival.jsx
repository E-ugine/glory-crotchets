import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice"; 
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function NewArrival() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); 

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    alert(`${product.name} added to cart!`);
  };

  const handleProductClick = (id) => navigate(`/product/${id}`);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-2">
      <h2 className="text-xl font-bold text-gray-800">New Arrivals</h2>
      <Splide options={{ type: "loop", perPage: 3, gap: "1rem", autoplay: true }}>
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <div className="flex flex-col items-center border p-4 shadow-sm">
              <img
                className="w-full h-[250px] object-cover cursor-pointer"
                src={product.images[0]}
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
              />
              <div className="text-center">
                <p className="mt-2 font-semibold">{product.name}</p>
                <p className="font-medium text-violet-900">${product.price?.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="my-5 h-10 w-full bg-violet-900 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
