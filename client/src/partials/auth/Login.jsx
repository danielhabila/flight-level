import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { RecoveryContext } from "../../context/RecoveryContext";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { setPage } = useContext(RecoveryContext);

  // collecting salary data
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  //-----------------------------------------------------------------------------------------END

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/auth/login", {
        ...formData,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);

      navigate("/");
    } catch (error) {
      alert("Something went wrong, please try again.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ----------------------- */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pt-32 pb-12 md:pt-40 md:pb-20">
          Sign in to your account
        </h1>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="">
                <label
                  className="block text-sm text-slate-300 font-medium mb-1"
                  htmlFor="usernameOrEmail"
                >
                  Username/Email
                </label>
                <input
                  id="usernameOrEmail"
                  className="form-input w-full"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    className="block text-sm text-slate-300 font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-sm font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out ml-2"
                    onClick={() => setPage("reset-request")}
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  className="form-input w-full"
                  type="password"
                  onChange={handleChange}
                  autoComplete="on"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    Login{" "}
                    <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <div className="text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                onClick={() => setPage("signup")}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------- */}
    </>
  );
}
