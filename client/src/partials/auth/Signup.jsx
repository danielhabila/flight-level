import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RecoveryContext } from "../../context/RecoveryContext";
import { useCookies } from "react-cookie";

export default function Signup() {
  const { setPage } = useContext(RecoveryContext);
  const [loading, setLoading] = useState(false);
  const [_, setCookies] = useCookies(["access_token"]);

  // collecting salary data
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

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
      const response = await axios.post("/auth/signup", {
        ...formData,
      });
      if (response.status === 201) {
        alert(response.data.message);
        const loginResponse = await axios.post("/auth/login", {
          usernameOrEmail: formData.username, // Assuming username is used for login
          password: formData.password,
        });
        if (loginResponse.status === 200) {
          alert("login successful!");
          // Optionally, you can store user information or tokens as needed
          setCookies("access_token", loginResponse.data.token);
          window.localStorage.setItem("userId", loginResponse.data.userId);
          navigate("/");
        } else {
          throw new Error(loginResponse.data.message || "Login failed");
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center pb-12">
      <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pt-32 pb-12 md:pt-40 md:pb-20">
        Create an account
      </h1>

      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="">
              <label
                className="block text-sm text-slate-300 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="form-input w-full"
                type="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <label
                className="block text-sm text-slate-300 font-medium mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
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
                  Sign up{" "}
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
            Already have an account?{" "}
            <Link
              className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
              onClick={() => setPage("login")}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
