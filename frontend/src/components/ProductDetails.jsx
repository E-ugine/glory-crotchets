import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../redux/productSlice"; 
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.product); 
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="font-[sans-serif] p-4">
      <div className="lg:max-w-screen-lg max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 lg:col-span-3">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2 shrink-0">
                {product.images?.slice(0, 3).map((image, index) => (
                  <div key={index} className="bg-gray-200 flex items-center justify-center">
                    <img
                      src={image || "/fallback.jpg"}
                      alt={`Product Image ${index + 1}`}
                      className="aspect-[230/307] object-cover object-top w-full h-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-gray-200">
                <img
                  src={product.images?.[3] || "/fallback.jpg"}
                  alt="Main Product"
                  className="w-full aspect-[750/800] object-top object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:col-span-2">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="mt-6">
                <h4 className="text-gray-800 text-2xl font-bold">${product.price}</h4>
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

            <div className="mt-6">
              <div className="flex gap-4">
                <button type="button" className="px-4 py-3 w-full border border-gray-800 bg-gray-800 hover:bg-transparent hover:text-gray-800 text-white text-sm font-semibold transition-all duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
