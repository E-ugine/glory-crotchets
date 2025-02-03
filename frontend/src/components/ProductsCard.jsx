import { motion } from "framer-motion";

export default function ProductsCard({ products }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 bg-[#eeecec]">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="w-64 p-4 bg-[#eeecec] rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            className="w-full h-48 object-contain transform transition-transform duration-300 hover:scale-105 focus:outline-none"
            src={product.image}
            alt={product.title}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="mt-4">
            <h2 className="text-lg font-medium text-yellow-900">{product.title}</h2>
            <p className="mt-2 text-yellow-600 text-sm">{product.description}</p>
            <span className="block mt-2 text-sm font-semibold text-red-500">
              ${product.price}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
