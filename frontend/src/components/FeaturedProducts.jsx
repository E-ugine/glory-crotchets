import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedProducts() { 
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((resp) => resp.json())
            .then((data) => setProducts(data.slice(0, 8)))  
            .catch((error) => console.error("Error fetching products:", error)); 
    }, []);

    // Placeholder functions
    const handleProductClick = (id) => {
        console.log("Product clicked:", id);
    };

    const handleAddToCart = (product) => {
        console.log("Added to cart:", product);
    };

    return (
        <div className="mx-auto max-w-[1200px] px-5 py-2">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center border p-4 shadow-sm">
                            <img
                                className="w-full h-[250px] object-contain cursor-pointer"
                                src={product.images?.[0] || "/placeholder.jpg"}
                                alt={product.name || "Product"}
                                onClick={() => handleProductClick(product.id)}
                            />
                            <div className="text-center">
                                <p className="mt-2 font-semibold text-yellow-500">{product.name}</p>
                                <p className="font-medium text-yellow-900">${product.price?.toFixed(2)}</p>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="my-3 h-10 w-full bg-[#b87333] text-white rounded-md"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading products...</p> 
                )}
            </div>

            {/* View All Products Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => navigate("/products")} 
                    className="bg-[#b87333] text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
                >
                    View All Products
                </button>
            </div>
        </div>  
    );
}
