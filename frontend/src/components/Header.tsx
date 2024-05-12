import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-blue-800 py-6 px-2">
      <nav
        className="
      container 
      mx-auto flex justify-between
      flex-col
      md:flex-row
      "
      >
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Zervi.com</Link>
        </span>
        <span className="hidden md:flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>

          {/* // for small screens */}
        <span className="flex md:hidden space-x-2 justify-end">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
        
      </nav>
    </header>
  );
};

export default Header;
