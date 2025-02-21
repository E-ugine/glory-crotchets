const Hero = () => {
  return (
    <div className="bg-[url('img/BG.png')] bg-cover bg-no-repeat w-full h-screen px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-around text-center lg:text-left">
      <div className="max-w-lg">
        <h1 className="font-lemon text-4xl md:text-5xl text-black capitalize leading-tight">
          get fresh <span className="text-[#ef5e41]">juiceables</span> everyday
        </h1>
        <p className="font-opensans text-base md:text-lg text-gray-800 py-4 md:py-6">
          starting at $360 per month, get those benefits and more.
        </p>
        <button className="font-opensans-bold text-white text-lg w-32 md:w-36 h-12 md:h-16 rounded-[50px_0px_50px_0px] bg-[#ef5e41] border-none">
          Details
        </button>
      </div>
      <div className="w-60 md:w-96 lg:w-[500px] h-60 md:h-96 lg:h-[500px] mt-8 lg:mt-0">
        <img
          src="https://i.pinimg.com/736x/4c/69/37/4c69377b89fa2eb91f3194bafa682ac4.jpg"
          alt="juice"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
