import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center py-12 mt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
            <span className="text-sky-500">GLORY CROCHET:</span> Where Yarn, <br className="hidden sm:block" /> Meets Art.
          </h1>
          <button
            onClick={handleClick}
            className="mt-6 bg-sky-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Explore Products
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/a3/62/dd/a362dd2de7fa40d60ffcae9591160a09.jpg"
            alt="GloryCrochet"
            className="rounded-lg shadow-lg w-full max-w-lg h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
