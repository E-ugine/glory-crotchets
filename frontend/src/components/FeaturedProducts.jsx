import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data.slice(0, 8)))  
      .catch((error) => console.error("Error fetching products:", error)); 
  }, []);

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(window.innerWidth <= 768 ? 2 : 4);  
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);

    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const handleProductClick = (id) => {
    console.log("Product clicked:", id);
  };

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-6">
      {products.length > 0 ? (
        <Splide options={{ type: "loop", perPage, gap: "1rem", autoplay: true }}>
          {products.map((product) => (
            <SplideSlide key={product.id}>
              <div className="h-[300px] w-full bg-white shadow-lg p-4 rounded-lg flex flex-col justify-between items-center text-center border border-gray-200">
                <img
                  className="w-full h-[180px] object-contain cursor-pointer"
                  src={product.images?.[0] || "/placeholder.jpg"}
                  alt={product.name || "Product"}
                  onClick={() => handleProductClick(product.id)}
                />
                <div className="text-center">
                  <p className="mt-2 font-semibold text-neutral-900">{product.name}</p>
                  <p className="font-medium text-yellow-900">${product.price?.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="my-3 h-10 w-full bg-sky-500 text-white rounded-md hover:bg-yellow-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <p className="text-center">Loading products...</p>
      )}

      {/* View All Products Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/products")}
          className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
