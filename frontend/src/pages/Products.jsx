import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif mt-2">SHOP NOW</h1>
      <ProductsCard products={products} />
      <Footer />  
    </div>
  );
};

export default Products;
