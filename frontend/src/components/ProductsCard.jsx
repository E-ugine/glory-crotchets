import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

export default function ProductsCard({ products }) {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    minPrice: "",
    maxPrice: "",
    sizes: [],
    colors: [],
    sort: "default",
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); 


  const categories = [
    { name: "Bedroom", count: products.filter(p => p.category === "bedroom").length || 12 },
    { name: "Sofa", count: products.filter(p => p.category === "sofa").length || 15 },
    { name: "Office", count: products.filter(p => p.category === "office").length || 14 },
    { name: "Outdoor", count: products.filter(p => p.category === "outdoor").length || 124 }
  ];


  const brands = [
    { name: "APEX", count: products.filter(p => p.brand === "APEX").length || 12 },
    { name: "Call of SOFA", count: products.filter(p => p.brand === "Call of SOFA").length || 15 },
    { name: "Puff B&G", count: products.filter(p => p.brand === "Puff B&G").length || 14 },
    { name: "Fornighte", count: products.filter(p => p.brand === "Fornighte").length || 124 }
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["gray", "purple", "darkred"];


  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      if (filterType === "categories" || filterType === "brands" || filterType === "sizes" || filterType === "colors") {
       
        const currentValues = [...prevFilters[filterType]];
        const index = currentValues.indexOf(value);
        
        if (index === -1) {
          currentValues.push(value);
        } else {
          currentValues.splice(index, 1);
        }
        
        return { ...prevFilters, [filterType]: currentValues };
      }
      
     
      return { ...prevFilters, [filterType]: value };
    });
  };


  const filteredProducts = products
    .filter((product) =>
      filters.categories.length > 0 ? filters.categories.includes(product.category) : true
    )
    .filter((product) =>
      filters.brands.length > 0 ? filters.brands.includes(product.brand) : true
    )
    .filter((product) =>
      filters.minPrice ? product.price >= parseFloat(filters.minPrice) : true
    )
    .filter((product) =>
      filters.maxPrice ? product.price <= parseFloat(filters.maxPrice) : true
    )
    .filter((product) =>
      filters.sizes.length > 0 ? filters.sizes.some(size => product.sizes?.includes(size)) : true
    )
    .filter((product) =>
      filters.colors.length > 0 ? filters.colors.some(color => product.colors?.includes(color)) : true
    );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sort === "priceLow") return a.price - b.price;
    if (filters.sort === "priceHigh") return b.price - a.price;
    if (filters.sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });


  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      {/* Mobile Filter Button - Only visible on small screens */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="relative inline-block w-40 mr-2">
            <select 
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={filters.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button 
            className="md:hidden border border-gray-300 hover:border-gray-400 px-4 py-2 rounded shadow"
            onClick={toggleMobileFilter}
          >
            Filters
          </button>
        </div>
        
        <div className="hidden md:flex">
          {/* Grid/List View Toggles */}
          <button 
            className={`p-2 border ${viewMode === 'grid' ? 'bg-amber-400 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setViewMode('grid')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            className={`p-2 border ${viewMode === 'list' ? 'bg-amber-400 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setViewMode('list')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filter Sidebar - Hidden on mobile unless filter button is clicked */}
        <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5 pr-4`}>
          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
            {categories.map((category) => (
              <div key={category.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`category-${category.name}`}
                  checked={filters.categories.includes(category.name.toLowerCase())}
                  onChange={() => handleFilterChange("categories", category.name.toLowerCase())}
                  className="mr-2"
                />
                <label htmlFor={`category-${category.name}`} className="flex-1">{category.name}</label>
                <span className="text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">BRANDS</h3>
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`brand-${brand.name}`}
                  checked={filters.brands.includes(brand.name)}
                  onChange={() => handleFilterChange("brands", brand.name)}
                  className="mr-2"
                />
                <label htmlFor={`brand-${brand.name}`} className="flex-1">{brand.name}</label>
                <span className="text-gray-500">({brand.count})</span>
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">PRICE</h3>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                className="w-1/2 p-2 border rounded mr-2"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="w-1/2 p-2 border rounded ml-2"
              />
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">SIZE</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded-sm ${
                    filters.sizes.includes(size) ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  }`}
                  onClick={() => handleFilterChange("sizes", size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">COLOR</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-sm border border-gray-300 ${
                    filters.colors.includes(color) ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleFilterChange("colors", color)}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}


        <div className={`${isMobileFilterOpen ? 'hidden md:block' : 'block'} md:w-3/4 lg:w-4/5`}>
  <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'} gap-4`}>
    {sortedProducts.map((product) => (
      <div 
        key={product.id} 
        className={`bg-white overflow-hidden shadow-sm transition duration-300 hover:shadow-md 
                    ${viewMode === 'list' ? 'flex' : ''}`}
      >
        {/* Product Image & Link */}
        <Link 
          to={`/product/${product.id}`} 
          className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} relative block overflow-hidden group`}
        >
          {/* Discount Badge */}
          <div className="absolute top-2 right-2 bg-sky-500 text-sm font-semibold px-2 py-1 z-10">
            - 25% OFF
          </div>
          
          <div className="">
            <img
              src={product.images?.[0] || "/placeholder.jpg"}
              alt={product.name}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Product Details */}
        <div className={`p-4 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
          <div>
            <h3 className="text-gray-900 font-semibold uppercase truncate">{product.name}</h3>

            {/* Price & Discount */}
            <div className="flex items-center mt-2">
              <span className="text-blue-600 font-medium">${product.price}</span>
              <span className="text-gray-400 line-through ml-2">${(product.price * 1.25).toFixed(2)}</span>
            </div>

            {/* Star Rating */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < 4 ? 'text-sky-500' : 'text-gray-300'} fill-current`} 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-gray-400 text-sm ml-1">(38)</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}
            className="mt-4 w-full bg-sky-500 text-white py-2 px-4 rounded transition duration-300 self-end"
          >
            Add to cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
}