import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Login() {
  const [loading, setLoading] = useState(false);

  // collecting salary data
  const [formData, setFormData] = useState({
    username: "",
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
      setLoading(false);
      navigate("/");
    } catch (error) {
      alert(
        "Something went wrong, please try again. If problem persists please email us using the Contact me button at the bottom right of your screen. Thank you!"
      );
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {/* ----------------------- */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pt-32 pb-12 md:pt-40 md:pb-20">
          Change Password
        </h1>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <label
                    className="block text-sm text-slate-300 font-medium mb-1"
                    htmlFor="password"
                  >
                    New Password
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
                    Reset password
                    <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ----------------------- */}
    </>
  );
}
