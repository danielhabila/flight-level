import React, { useState, useEffect } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("exact");

  //salary option radio (either exact or range)
  const handleSalaryOptionChange = (option) => {
    setSelectedOption(option);

    //clearing the value field of salaryPrecise if the selectedOption is "range"
    if (option === "range") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        salaryPrecise: "",
      }));
    }
    //clearing the value field of salaryRange if the selectedOption is "exact"
    else if (option === "exact") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        salaryRange: {
          min: "",
          max: "",
        },
      }));
    }
  };

  // collecting Post job data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyUrl: "",
    jobTitle: "",
    jobDescription: "",
    companyDetails: "",
    salaryPrecise: "",
    salaryRange: {
      min: "",
      max: "",
    },
  });

  //-----------------------------------------------------------------------------------------END

  const handleChange = (event) => {
    if (event.target.name === "min" || event.target.name === "max") {
      setFormData({
        ...formData,
        salaryRange: {
          ...formData.salaryRange,
          [event.target.name]: event.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/jobLead", {
        ...formData,
      });
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/success");

        // const inputFields = document.querySelectorAll(
        //   "input[type='text'],input[type='number'], textarea"
        // );
        // inputFields.forEach((inputField) => (inputField.value = ""));
        // setProductImages([]);
        // document.getElementById("file").value = "";
        // document.getElementById("price").inputField = "";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      alert(
        "Something went wrong, please try again. If problem persists please email us using the feedback button at the bottom right of your screen. Thank you!"
      );
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full mt-32 mb-20 " id="contactus">
      <div className="h-full px-3 sm:px-6">
        <div className="h-full w-full  sm:max-w-3xl px-4 md:px-20 mx-auto flex flex-col after:mt-auto after:flex-1 ">
          <div className="my-10">
            <h1 className="text-2xl md:text-4xl  font-extrabold font-inter mb-2 ">
              Let us find your next A Player.
            </h1>
            <div className="text-gray-500 text-sm">
              Fill out this form and we'll setup a time to talk.
            </div>
          </div>

          {/* Form */}
          <form
            className="mb-12"
            onSubmit={handleSubmit}
            // autoComplete="off"
          >
            <div className="divide-y divide-gray-200 -my-6">
              {/* Group #1 */}
              <div className="py-6">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 "
                      htmlFor="name"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full border-0 bg-white/5 shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      name="name"
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
                      Equipment <span className="text-red-500">*</span>
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

                  <div className="flex gap-2">
                    <div className="flex flex-col w-1/2">
                      <label
                        className="block text-sm font-medium mb-1 text-white
"
                        htmlFor="hourlyWage"
                      >
                        Hourly Wage <span className="text-red-500">*</span>
                      </label>
                      <NumericFormat
                        id="hourlyWage"
                        name="hourlyWage"
                        className="form-input block w-full  border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20 
"
                        // value={value}
                        onChange={handleChange}
                        format="0,0.00"
                        decimalSeparator="."
                        prefix={"$"}
                        thousandSeparator={true}
                        allowNegative={false}
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <label
                        className="block text-sm font-medium mb-1 text-white
"
                        htmlFor="perDiem"
                      >
                        Per Diem
                      </label>
                      <NumericFormat
                        id="perDiem"
                        name="perDiem"
                        className="form-input block w-full  border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                        // value={value}
                        onChange={handleChange}
                        format="0,0.00"
                        decimalSeparator="."
                        prefix={"$"}
                        thousandSeparator={true}
                        allowNegative={false}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="mmg"
                    >
                      Minimum Monthly Guarantee (MMG){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mmg"
                      name="mmg"
                      className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20 "
                      type="text"
                      onChange={handleChange}
                      placeholder="80 hours"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white"
                      htmlFor="location"
                    >
                      Location <span className="text-red-500">*</span>
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

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="employmentStatus"
                    >
                      Employment Status <span className="text-rose-500">*</span>
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
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="employmentStatus"
                    >
                      Years at company <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
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

                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-white
"
                      htmlFor="flightTime"
                    >
                      Total flight time <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="flightTime"
                      name="flightTime"
                      className="form-input w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                      type="text"
                      onChange={handleChange}
                      required
                    />{" "}
                  </div>

                  <div>
                    <label
                      className="block text-sm text-gray-800 font-medium mb-1 text-white
"
                      htmlFor="notes"
                    >
                      Other Comments / Notes{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="form-textarea text-sm py-2 w-full border-0 bg-white/5 text-white shadow-md ring-1 ring-white/20"
                      rows="5"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="btn w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-600/80 shadow-sm"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
