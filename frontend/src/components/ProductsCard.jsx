export default function ProductsCard({ products }) {
    return (
      <>
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className="">
              <img className="" src={product.image} alt={product.title} />
            </div>
            <div className="">
              <h2 className="text-2xl font-medium text-yellow-900">{product.title}</h2>
              <p className="mt-2 text-yellow-600">{product.description}</p>
              <span className="block mt-2 text-sm text-red-500">${product.price}</span>
            </div>
          </div>
        ))}
      </>
    );
  }
  