import React, { useContext } from "react";
import { FetchSalaryContext } from "../../context/FetchSalaryContext.jsx";
import UploadImage from "../../images/upload.jpg";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function UploadSalaryProof() {
  const { salaryProof, setSalaryProof } = useContext(FetchSalaryContext);

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    // -------------------------
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }

    // Check if the total size exceeds 10MB (10 * 1024 * 1024 bytes)
    if (totalSize > 10 * 1024 * 1024) {
      alert("Total file size exceeds 10MB. Please select smaller files.");
      return;
    }
    // -------------------------
    if (files.length === 1) {
      const file = files[0];
      const base64 = await convertToBase64(file);
      setSalaryProof([base64]);
    } else {
      let imageArray = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await convertToBase64(file);
        imageArray.push(base64);
      }
      setSalaryProof(imageArray);
    }
  };

  // converting to base64 file
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="col-span-full">
      <label
        className="block text-sm font-medium mb-1 mt-4 text-white"
        htmlFor="salaryProof"
      >
        Upload Proof (Offer Letter, T4, etc)
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-3">
        <div className="text-center ">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-500"
            aria-hidden="true"
          />
          <div className="mt-2 text-sm  leading-6 text-gray-400">
            <label
              htmlFor="salaryProof"
              className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white  hover:text-[#2c94c0]"
            >
              {salaryProof.length > 0 ? (
                <span className="text-green-500">
                  File Successfully Uploaded!
                </span>
              ) : (
                <div>
                  <span>Click to Upload File</span>
                  <input
                    id="salaryProof"
                    name="salaryProof"
                    type="file"
                    accept="image/"
                    onChange={handleImageUpload}
                    multiple={true}
                    className="sr-only"
                  />
                </div>
              )}
            </label>
          </div>
          {salaryProof ? (
            salaryProof.length > 0 ? (
              <button
                type="button"
                className="ml-2 px-2 py-0.5 text-sm font-medium text-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-600 transition duration-150 ease-in-out cursor-pointer"
                onClick={() => {
                  setSalaryProof([]);
                  document.getElementById("file").value = []; //clears filename
                }}
              >
                Remove
              </button>
            ) : (
              <p className="text-xs leading-5 text-gray-400">
                PNG, JPG, PDF up to 10MB
              </p>
            )
          ) : null}
        </div>
      </div>
      <div className="text-xs text-gray-500 italic mt-1">
        Your identity will be anonymous. (Optional)
      </div>
    </div>
  );
}
