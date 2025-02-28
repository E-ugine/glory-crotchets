import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/products");
  };

  return (
    <div className="bg-neutral-900 min-h-screen flex items-center mt-2">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="text-sky-500">GLORY CROTCHET:</span> Where Yarn, <br></br> Meets Art.
          </h1>
          <p className="mt-5 text-neutral-400 text-lg">
          GloryCrotchet is a haven where creativity intertwines with craftsmanship to bring intricate designs to life.
           At GloryCrotchet, we specialize in transforming threads into timeless pieces, weaving passion and artistry into every stitch.
            Whether through delicate patterns, bespoke crochet creations, or innovative textile designs, we craft beauty that tells a story.
          </p>
         
          <button
            onClick={handleClick}
            className="mt-6 bg-sky-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Explore Products
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/a3/62/dd/a362dd2de7fa40d60ffcae9591160a09.jpg"
            alt="Preline Agency"
            className="rounded-lg shadow-lg w-full max-w-[600px] lg:max-w-[700px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
