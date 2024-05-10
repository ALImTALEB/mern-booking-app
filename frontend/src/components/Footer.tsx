const Footer = () => {
  return (
    <footer className="bg-blue-800 py-5 md:py-10 px-2">
      <div
        className="
        
        container
        mx-auto flex justify-between items-center"
      >
        <h2
          className="text-lg
          md:text-3xl
        text-white font-bold tracking-tight"
        >
          Zervi.com
        </h2>
        <nav className="text-white font-bold tracking-tight flex gap-2 md:gap-4">
          <a className="cursor-pointer text-sm md:text-lg">Privacy Policy</a>
          <a className="cursor-pointer text-sm md:text-lg ">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
