import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, User, Home, Package, Menu, X, Search, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md 
      ${isScrolled ? "bg-white bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-[#eeecec]"}`}
    >
      <div className="px-8 py-3 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-2xl font-semibold text-sky-500 font-serif italic">
            GloryCrotchet
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Center - Navigation Links */}
        <ul className={`md:flex md:space-x-8 text-gray-600 absolute md:relative w-full md:w-auto left-0 top-14 md:top-0 
          px-6 py-5 md:p-0 shadow-md md:shadow-none transition-all duration-300 z-50 bg-white md:bg-transparent
          ${isOpen ? "block" : "hidden"}`}
        >
          <li className="flex items-center space-x-1 cursor-pointer hover:text-black" onClick={() => navigate("/")}>
            <Home size={18} />
            <button>Home</button>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-black" onClick={() => navigate("/products")}>
            <Package size={18} />
            <button>Shop</button>
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-black" onClick={() => navigate("/user")}>
            <User size={18} />
            <button>My Account</button>
          </li>

          {/* Auth Links (Sign Up / Log In) */}
          <div className="flex items-center space-x-2 border-l-2 border-gray-300 pl-3">
            <button 
              className="text-sky-500 hover:text-black font-medium" 
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <span className="text-gray-400">|</span>
            <button 
              className="text-sky-500 hover:text-black font-medium" 
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </ul>

        {/* Right - Search Bar, Wishlist, Cart */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-9 pr-3 py-2 bg-gray-100 rounded-full outline-none w-60"
              aria-label="Search products"
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />
          </div>

          {/* Wishlist & Cart Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Icon */}
            <div className="cursor-pointer" onClick={() => navigate("/wishlist")}>
              <Heart size={26} className="text-red-500 hover:text-red-700" />
            </div>

            {/* Cart Icon with Dynamic Count */}
            <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
              <ShoppingCart size={26} className="text-black hover:text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-400 
                  text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
