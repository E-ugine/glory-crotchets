export default function ProductsCard({ products }) {
    return (
      <>
        {products.map((product) => (
          <div className="flex flex-wrap gap-3 sm:gap-6" key={product.id}>
            <div className="w-full sm:w-1/2">
              <img className="w-full h-48 object-contain" src={product.image} alt={product.title} />
            </div>
            <div className="w-full sm:w-1/2 px-6">
              <h2 className="text-2xl font-medium text-gray-900">{product.title}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <span className="block mt-2 text-sm text-gray-500">${product.price}</span>
            </div>
          </div>
        ))}
      </>
    );
  }
  