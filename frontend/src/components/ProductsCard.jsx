export default function ProductsCard({ products }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 bg-[#eeecec]">
      {products.map((product) => (
        <div key={product.id} className="w-64 p-4 bg-[#eeecec] rounded-lg shadow-md">
          <img
            className="w-full h-48 object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="mt-4">
            <h2 className="text-lg font-medium text-yellow-900">{product.title}</h2>
            <p className="mt-2 text-yellow-600 text-sm">{product.description}</p>
            <span className="block mt-2 text-sm font-semibold text-red-500">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
