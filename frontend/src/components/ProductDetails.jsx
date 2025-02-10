import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Product not found");
        }
        return resp.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-gray-700 text-lg">Loading product details...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">{error}</div>;
  if (!product) return <div className="text-center text-red-500 text-lg">Product not found.</div>;

  return (
    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-screen-lg max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 lg:col-span-3">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2 shrink-0">
                {Array.isArray(product.images) && product.images.length > 0 ? (
                  product.images.slice(0, 3).map((img, index) => (
                    <div key={index} className="bg-gray-200 flex items-center justify-center">
                      <img src={img} alt={`Product image ${index + 1}`} className="aspect-[230/307] object-cover object-top w-full h-full cursor-pointer" />
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-200 flex items-center justify-center">
                    <img src="/placeholder.jpg" alt="No image available" className="aspect-[230/307] object-cover object-top w-full h-full cursor-pointer" />
                  </div>
                )}
              </div>
              <div className="flex-1 bg-gray-200">
                <img src={product.images?.[0] || "/placeholder.jpg"} alt="Product" className="w-full aspect-[750/800] object-top object-cover" />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{product.title || "Unknown Product"}</h3>
              <p className="mt-2 text-gray-500">{product.description || "No description available."}</p>
              <div className="mt-6">
                <h4 className="text-gray-800 text-2xl font-bold">${product.price?.toFixed(2) || "N/A"}</h4>
                <p className="text-gray-500 text-sm mt-1">Tax included</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {product.sizes?.map((size) => (
                  <button key={size} type="button" className="w-10 h-9 border-none outline-none bg-gray-200 text-gray-800 text-sm flex items-center justify-center shrink-0">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Add to Wishlist
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
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
