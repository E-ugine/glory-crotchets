import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-700 text-lg">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center text-red-500 text-lg">Product not found.</div>;
  }

  return (
    <section className="relative grid items-start gap-8 bg-white py-8 lg:grid-cols-5">
      {/* Product Images */}
      <div className="grid gap-4 lg:col-span-2 lg:sticky lg:top-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-xl"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="lg:col-span-3">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex text-yellow-400">
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span>&#9733;</span>
            <span className="text-gray-300">&#9733;</span>
          </div>
          <span className="text-sm text-gray-600">(200 reviews)</span>
          <a href="#reviews" className="text-sm text-blue-500">
            View All Reviews
          </a>
        </div>

        <p className="mt-4 text-gray-500">{product.description}</p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm text-gray-500 line-through">
            ${product.price * 1.2}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Add to Wishlist
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>

        {/* Product Information */}
        <div className="mt-6 border-t pt-4">
          <details>
            <summary className="cursor-pointer text-lg font-semibold">
              Product Information
            </summary>
            <p className="mt-2 text-gray-500">{product.details}</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
