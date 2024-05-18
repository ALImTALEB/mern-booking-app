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
          PexaBooking
        </h2>
        <nav className="text-white font-bold tracking-tight flex flex-col">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ali-taleb-9a6345160/"
            className="cursor-pointer text-sm md:text-lg flex items-center gap-1"
          >
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
              color={"#ffffff"}
              fill={"none"}
            >
              <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>{" "}
            by Ali Taleb
          </a>
          {/* <a className="cursor-pointer text-sm md:text-lg flex items-center gap-1">
            Thanks to
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
              color={"#ffffff"}
              fill={"none"}
            >
              <path
                d="M12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801C11.5422 4.50096 11.8304 4.71743 12 4.71743C12.1696 4.71743 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C21.1812 5.04838 22.2505 7.28623 21.9494 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 18C14 18 15 18 16 20C16 20 19.1765 15 22 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chris Blakely
          </a> */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
