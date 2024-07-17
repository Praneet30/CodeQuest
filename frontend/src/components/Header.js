import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";
import { toast } from "sonner";
const Header = () => {
  const authData = useContext(AuthContext);
  const isLoggedIn = authData.authData !== null;
  const navigate = useNavigate();
  return (
    <nav className=" bg-white fixed shadow-md w-full h-16 px-2  md:px-4 z-50 ">
      {/* desktop */}
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARB6NxdvZA3RzOZGxDBH-Cst09BfZmF7atw&s"
            alt="Logo"
            className="h-8 w-10"
          />
        </Link>
        <Link to="/" className="text-xl font-bold">
          CodeQuest
        </Link>
        <ul className="flex space-x-20 ml-20">
          <li>
            <Link
              to={"/"}
              className="text-base md:text-lg font-semibold hover:text-red-500 hover:text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={isLoggedIn ? "/problems" : "/login"}
              className="text-base md:text-lg hover:text-red-500 font-semibold"
            >
              Problems
            </Link>
          </li>
          <li>
            <Link
              to={isLoggedIn ? "/ide" : "/login"}
              className="text-base md:text-lg hover:text-red-500 font-semibold"
            >
              IDE
            </Link>
          </li>
          <li>
            <Link
              to={isLoggedIn ? "/leaderboard" : "/login"}
              className="text-base md:text-lg hover:text-red-500 font-semibold"
            >
              Leaderboard
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex space-x-12">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-base md:text-lg mr-4 hover:text-red-500 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-base md:text-lg hover:text-red-500 font-semibold"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
             <Link
                to="/profile"
                className="text-base md:text-lg mr-4 hover:text-red-500 font-semibold"
              >
                Profile
              </Link>
              <Link to="/"
              className="text-base md:text-lg hover:text-red-500 font-semibold ">
              <button
                onClick={() => {
                  authData.logout();
                  toast.success('You have successfully logged out');
                  navigate("/");
                }}
              >
                Logout
              </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* mobile */}
    </nav>
  );
};

export default Header;
