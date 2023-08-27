import React from "react";

import { Link, useNavigate } from "react-router-dom";

function JobItem(props) {
  const navigate = useNavigate();

  return (
    <div
      className={`[&:nth-child(-n+12)]:-order-1 group ${
        !props.sticky && "border-b border-gray-200"
      }`}
    >
      <div
        className={`px-1.5 md:px-4 py-5 hover:bg-gray-100 rounded-xl flex items-center place-content-between cursor-pointer ${
          props.sticky && "bg-[#FDD663] hover:bg-[#FDD663]/80 rounded-xl"
        }`}
        onClick={() => navigate(`${props.link}`)}
      >
        {/* Middle Content */}
        <div className="mx-5 grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0 truncate overflow-ellipsis">
          <div>
            <div className="mb-2">
              <Link
                className="text-sm md:text-lg text-gray-800 font-bold"
                to={props.link}
              >
                {props.title}
                {/* {props.title.length > 28
                  ? `${props.title.slice(0, 28)}...`
                  : props.title} */}
              </Link>
              <div className="flex propss-start space-x-2">
                <div className="text-xs md:text-sm text-gray-800 font-semibold mb-1">
                  {props.companyName}
                </div>
                {props.sticky && (
                  <svg
                    className="w-3 h-3 shrink-0 fill-amber-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.143 5.143A4.29 4.29 0 0 1 6.857.857a.857.857 0 0 0-1.714 0A4.29 4.29 0 0 1 .857 5.143a.857.857 0 0 0 0 1.714 4.29 4.29 0 0 1 4.286 4.286.857.857 0 0 0 1.714 0 4.29 4.29 0 0 1 4.286-4.286.857.857 0 0 0 0-1.714Z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-sm italic text-gray-500 ">
          {/* {props.date} */}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
