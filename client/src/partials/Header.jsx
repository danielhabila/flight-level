import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import fl from "../images/fl-logo2.png";
import axios from "axios";
import MobileMenu from "./ui/MobileMenu";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  const {
    loginWithRedirect: login,
    isAuthenticated,
    user,
    logout,
  } = useAuth0();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleCheckUserDB = async () => {
      setLoading(true);

      try {
        if (isAuthenticated) {
          const response = await axios.post("/api/check-user", {
            username: user.nickname,
            email: user.email,
          });

          if (response.status === 200) {
            // alert("Welcome back");
          } else if (response.status === 201) {
            // alert("Welcome new user");
          } else if (response.status === 400) {
            alert("Something went wrong server side, please try again.");
          } else {
            throw new Error(response.data.message || "Login failed");
          }
        }
      } catch (error) {
        alert("Something went wrong, please try again.");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleCheckUserDB();
  }, [!!user]);

  return (
    <header className="absolute w-full z-30 mt-6 md:bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18 ">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block " to="/">
              <img className="h-10 sm:h-12 w-auto" src={fl} alt="site logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          {/* <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/integrations"
                >
                  Pilot Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/pricing"
                >
                  Payscale Info
                </Link>
              </li>
            </ul>
          </nav> */}
          {/* Desktop sign in links */}
          <ul className="flex grow justify-end flex-wrap items-center">
            <li className="ml-3 sm:ml-6 inline ">
              {!isAuthenticated ? (
                <Link
                  className="btn-sm inline-flex items-center bg-white hover:bg-white/80 group"
                  onClick={login}
                  // to="/login"
                >
                  Login
                  <span className="tracking-normal text-blue-950 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              ) : (
                <div className="flex grow justify-end flex-wrap items-center">
                  <Link
                    className="text-white font-medium text-sm hover:underline"
                    to="/account"
                  >
                    {user.nickname}
                  </Link>
                  <Link
                    className="ml-4 btn-sm inline-flex items-center bg-white hover:bg-white/80 group"
                    onClick={logout}
                  >
                    Logout!
                  </Link>
                </div>
              )}
            </li>
          </ul>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
