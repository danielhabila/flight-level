import React, { useState, useContext } from "react";
// import { FetchSalaryContext } from "../context/FetchSalaryContext.jsx";
import axios from "axios";
import Loader from "../partials/ui/Loader.jsx";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import BgSVG from "../partials/ui/BgSVG.jsx";
import { useAuth0 } from "@auth0/auth0-react";

export default function SubmitToFL() {
  // const { salaryProof, setSalaryProof } = useContext(FetchSalaryContext);
  const { isLoading, isAuthenticated, user } = useAuth0();

  const [loading, setLoading] = useState(false);

  // collecting salary data
  const [formData, setFormData] = useState({
    title: "",
    postUrl: "",
    notes: "",
  });

  //-----------------------------------------------------------------------------------------END

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    if (!isAuthenticated) {
      alert("Please login to submit a post.");
      return;
    }
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/create-post", {
        ...formData,
        email: user.email,
        username: user.nickname,
      });
      if (response.status === 201) {
        alert("Your post has been successfully submitted for review 🤩. ");

        const inputFields = document.querySelectorAll(
          "input[type='text'],input[type='number'], textarea"
        );
        inputFields.forEach((inputField) => (inputField.value = ""));
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      alert(
        "Something went wrong, please try again 🙁. If problem persists please email us using the Contact button at the bottom right of your screen."
      );
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <main className=" grow py-16 md:py-24 relative">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
              <h2 className="h4 sm:text-3xl font-cabinet-grotesk text-gray-100 pb-2 mb-16 border-b border-gray-700">
                Create Post
              </h2>

              {/* Form */}
              <form className="mb-12 mx-auto max-w-2xl" onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200 -my-6">
                  <div className="py-6">
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-1 text-white"
                          htmlFor="title"
                        >
                          Title <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="title"
                          name="title"
                          className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                          type="text"
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1 text-white"
                          htmlFor="postUrl"
                        >
                          Post URL
                        </label>
                        <input
                          id="postUrl"
                          name="postUrl"
                          className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                          type="text"
                          onChange={handleChange}
                        />
                        <div className="text-xs text-gray-400 italic mt-1">
                          Please leave "Post URL" empty if you'll be writing
                          your own article below.
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-sm font-medium mb-1 text-white
"
                          htmlFor="notes"
                        >
                          Article / Description / Comments / Notes{" "}
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          className="form-textarea text-sm py-2 w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                          rows="5"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    className={`btn w-full text-white font-semibold ${
                      loading
                        ? "bg-[#2c94c0]/80 cursor-not-allowed"
                        : "bg-[#2c94c0] hover:bg-[#2c94c0]/80 shadow-sm"
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  {!isLoading ? (
                    !isAuthenticated ? (
                      <div className="text-xs text-gray-400 italic mt-1">
                        ** You have to be logged in to submit. **
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
