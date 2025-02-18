import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, User, Home, Package, Menu, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Get the cart items from Redux store (with default empty array)
  const cartItems = useSelector((state) => state.cart?.items || []);

  // Calculate total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#eeecec] shadow-md px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="bg-pink-200 p-2 rounded-full">
            <img src="/logo.svg" alt="Logo" className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold text-gray-800">GloryCrotchet</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Center - Navigation Links (Hidden on Mobile) */}
        <ul className={`md:flex md:space-x-8 text-gray-600 absolute md:relative w-full md:w-auto left-0 top-14 md:top-0 p-5 md:p-0 shadow-md md:shadow-none transition-all duration-300 z-50 ${isOpen ? "block" : "hidden"}`}>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <Home size={18} />
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <Package size={18} />
            <button onClick={() => navigate("/products")}>Shop</button>
          </li>
        </ul>

        {/* Right - Search Bar, Cart, Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-9 pr-3 py-2 bg-gray-100 rounded-full outline-none w-60"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        {/* Cart Icon with Dynamic Count */}
<div className="relative cursor-pointer bg-black p-2 rounded-full" onClick={() => navigate("/cart")}>
  <div className="relative">
    <ShoppingCart size={22} color="white" />
    
    {/* Cart Count Badge (inside icon) */}
    {cartCount > 0 && (
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-400 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
        {cartCount}
      </span>
    )}
  </div>
</div>


          {/* User Profile */}
          <div className="cursor-pointer bg-black p-2 rounded-full">
            <User size={22} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
