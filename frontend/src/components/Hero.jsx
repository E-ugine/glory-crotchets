import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/products");
  };

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-sky-500">GLORY CROTCHET:</span> Where Yarn, <br className="hidden sm:block" /> Meets Art.
          </h1>
          
          <p className="mt-4 text-neutral-300 text-lg sm:text-xl leading-relaxed">
            GloryCrotchet is a haven where creativity intertwines with craftsmanship to bring intricate designs to life.
          </p>

          {/* Button (Centered on mobile, left-aligned on large screens) */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={handleClick}
              className="bg-sky-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Explore Products
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/a3/62/dd/a362dd2de7fa40d60ffcae9591160a09.jpg"
            alt="Preline Agency"
            className="rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
