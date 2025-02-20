import { useNavigate } from "react-router";

export default function Deals() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5">
      <section className="mt-10 flex flex-col md:flex-row max-w-[1200px] justify-between bg-violet-900 px-5">
        <div className="py-8 px-3 lg:px-16 text-center md:text-left">
          <p className="text-white">ONLINE EXCLUSIVE</p>
          <h2 className="pt-6 text-5xl font-bold text-yellow-400">15% OFF</h2>
          <p className="pt-4 text-white">
            ELEGANCE, <br />
            IN EVERY TOUCH
          </p>
          <button
            className="mt-6 bg-amber-400 px-4 py-2 duration-100 hover:bg-yellow-300"
            onClick={handleClick}
          >
            Shop now
          </button>
        </div>

        <img
          className="w-full md:w-[550px] object-cover mt-5 md:mt-0"
          src="https://i.pinimg.com/736x/27/0a/7a/270a7acd87717ce67d26a24f2e69fa8e.jpg"
          alt="Dam Dam"
        />
      </section>
    </div>
  );
}
