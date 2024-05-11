const Hero = () => {
  return (
    <div className="bg-blue-800 pb-16 px-2">
      <div
        className="
        container
        mx-auto flex flex-col gap-2"
      >
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          Find your next stay
        </h1>
        <p className="text-2xl text-white">
          Search low prices on your dream vacation...
        </p>
        <p className="text-md text-yellow-600">
          "The app is currently under development, with only the authentication
          feature available at this stage."
        </p>
      </div>
    </div>
  );
};

export default Hero;
