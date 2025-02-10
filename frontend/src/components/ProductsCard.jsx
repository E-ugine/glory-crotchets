import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductsCard({ products }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-10 bg-[#eeecec] p-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="w-64 p-4 bg-white rounded-lg shadow-md cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate(`/products/${product.id}`)} // Navigate to product details
        >
          <motion.img
            className="w-full h-48 object-cover rounded-md transform transition-transform duration-300 hover:scale-105 focus:outline-none"
            src={product.image}
            alt={product.title}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-900">{product.title}</h2>
            <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
            <span className="block mt-2 text-sm font-semibold text-red-500">
              ${product.price}
            </span>
            <div className="flex justify-end mt-3">
              <button 
                className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-md shadow-md hover:bg-yellow-700"
                onClick={(e) => {
                  e.stopPropagation(); 
                  console.log("Added to cart:", product.id);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
