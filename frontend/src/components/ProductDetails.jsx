import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/productSlice"; 
import { addToCart } from "../redux/cartSlice"; 

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Fetch products from Redux store
  const product = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProduct(id)); // Fetch single product by id;
  }, [id, dispatch]);

  if (loading) return <div className="text-center text-gray-700 text-lg">Loading product details...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;
  if (!product) return <div className="text-center text-red-500 text-lg">Product not found.</div>;

  return (
    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-screen-lg max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Product Images */}
          <div className="w-full h-[75%] lg:col-span-3">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                {Array.isArray(product.images) && product.images.length > 0 ? (
                  product.images.slice(0, 3).map((img, index) => (
                    <div key={index} className="bg-gray-200 flex items-center justify-center">
                      <img src={img} alt={`Product image ${index + 1}`} className="object-cover w-full h-full cursor-pointer" />
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-200 h-screen flex items-center justify-center">
                    <img src="/placeholder.jpg" alt="No image available" className="object-contain max-w-full h-full cursor-pointer" />
                  </div>
                )}
              </div>
              <div className="flex-1 bg-gray-200 max-h-[50%]">
                <img src={product.images?.[0] || "/placeholder.jpg"} alt="Product" className="w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800">{product.name || "Unknown Product"}</h3>
            <p className="mt-2 text-gray-500">{product.description || "No description available."}</p>
            <div className="mt-6">
              <h4 className="text-gray-800 text-2xl font-bold">${product.price?.toFixed(2) || "N/A"}</h4>
              <p className="text-gray-500 text-sm mt-1">Tax included</p>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Add to Wishlist
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
