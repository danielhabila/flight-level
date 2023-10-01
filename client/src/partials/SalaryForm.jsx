import React, { useState, useContext } from "react";
import { FetchSalaryContext } from "../context/FetchSalaryContext.jsx";
import axios from "axios";
import UploadSalaryProof from "./ui/UploadSalaryProof";
import Loader from "./ui/Loader.jsx";

const ApplicationForm = () => {
  const { salaryProof, setSalaryProof } = useContext(FetchSalaryContext);
  const [loading, setLoading] = useState(false);

  // collecting salary data
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    equipment: "",
    hourlyWage: "",
    perDiem: "",
    mmg: "",
    location: "",
    employmentStatus: "New hire",
    yearsAtCompany: "Less than 1 year",
    schedule: "",
    notes: "",
    email: "",
  });

  //-----------------------------------------------------------------------------------------END

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/submittedSalary", {
        ...formData,
        salaryProof: salaryProof,
      });
      if (response.status === 201) {
        alert(response.data.message);

        const inputFields = document.querySelectorAll(
          "input[type='text'],input[type='number'], textarea"
        );
        inputFields.forEach((inputField) => (inputField.value = ""));
        document.getElementById("hourlyWage").value = "";
        setSalaryProof([]);

        setLoading(false);
      } else {
        setLoading(false);
        throw new Error(response.status);
      }
    } catch (error) {
      alert(
        "Something went wrong, please try again. If problem persists please email us using the Contact me button at the bottom right of your screen. Thank you!"
      );
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full py-16 md:py-24" id="contactus">
      <div className="h-full px-3 sm:px-6">
        <div className="h-full w-full  sm:max-w-3xl md:px-20 mx-auto flex flex-col after:mt-auto after:flex-1 ">
          <div className="my-10">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">
              Add your salary!
            </h2>
            <p className="mt-6 md:text-lg leading-8 text-gray-300">
              Fill out your compensation data below to help other Pilots
              negotiate salaries and improve transparency in our community.
            </p>
          </div>

          {/* Form */}
          <form className="mb-12" onSubmit={handleSubmit}>
            <div className="divide-y divide-gray-200 -my-6">
              <div className="py-6">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 "
                      htmlFor="companyName"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      className="form-input w-full border-0 bg-white/5 shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      placeholder="Air Canada"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="position"
                    >
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="position"
                      name="position"
                      className="form-input w-full border-0 bg-white/5  shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      placeholder="Captain or First Officer"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="equipment"
                    >
                      Airplane <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="equipment"
                      name="equipment"
                      className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      placeholder="A320"
                      required
                    />{" "}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="hourlyWage"
                    >
                      Hourly Wage or Salary ($CAD){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="hourlyWage"
                      name="hourlyWage"
                      className="form-input w-full border-0 bg-white/5  shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="perDiem"
                    >
                      Per Diem ($CAD)
                    </label>
                    <input
                      id="perDiem"
                      name="perDiem"
                      className="form-input w-full border-0 bg-white/5  shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="mmg"
                    >
                      Minimum Monthly Guarantee (MMG){" "}
                    </label>
                    <input
                      id="mmg"
                      name="mmg"
                      className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20 "
                      type="text"
                      onChange={handleChange}
                      placeholder="80 hours"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="schedule"
                    >
                      Schedule
                    </label>
                    <input
                      id="schedule"
                      name="schedule"
                      className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      placeholder=""
                    />{" "}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="location"
                    >
                      Location (Base) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="location"
                      name="location"
                      className="form-input w-full border-0 bg-white/5  shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      placeholder="Toronto, ON"
                      required
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="employmentStatus"
                      >
                        Employment Status{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="employmentStatus"
                        name="employmentStatus"
                        className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                        onChange={handleChange}
                        required
                      >
                        <option>New hire</option>
                        <option>Current employee</option>
                        <option>Past employee</option>
                      </select>
                    </div>

                    <div className="w-1/2">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="yearsAtCompany"
                      >
                        Years at Company{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="yearsAtCompany"
                        name="yearsAtCompany"
                        className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                        onChange={handleChange}
                        required
                      >
                        <option> Less than 1 year</option>
                        <option>1 </option>
                        <option>2 </option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8 </option>
                        <option>9 </option>
                        <option>10 </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="notes"
                    >
                      Other Comments / Notes{" "}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="form-textarea text-sm py-2 w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                      rows="5"
                      onChange={handleChange}
                      placeholder="You can let us know about any bonuses, benefits, training bond or other details you would like to share."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1 text-white mt-2
"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                type="text"
                onChange={handleChange}
              />
              <div className="text-xs text-gray-500 italic mt-1">
                Stays private. We may reach out if we have any questions.
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            <UploadSalaryProof />

            {/* ------------------------------------------------------ */}

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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
