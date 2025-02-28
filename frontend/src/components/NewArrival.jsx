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
  const [perPage, setPerPage] = useState(3); 
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

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(window.innerWidth <= 768 ? 2 : 3); 
    };

    updatePerPage(); 
    window.addEventListener("resize", updatePerPage); 

    return () => window.removeEventListener("resize", updatePerPage);
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
      <Splide options={{ type: "loop", perPage, gap: "1rem", autoplay: true }}>
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <div className="flex flex-col items-center border p-4 shadow-sm">
              <img
                className="w-full h-[250px] object-contain cursor-pointer"
                src={product.images[0]}
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
              />
              <div className="text-center">
                <p className="mt-2 font-semibold text-neutral-900">{product.name}</p>
                <p className="font-medium text-yellow-900">${product.price?.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="my-5 h-10 w-full bg-sky-500 text-white"
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
