import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
// import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

export default function JobItem(props) {
  const defaultUrl = "https://flightlevel.fyi/";

  const openInNewTab = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.focus();
    }
  };

  return (
    <>
      <article className="bg-slate-800/40 shadow-md rounded-md border border-slate-700 p-4">
        <div className="flex flex-start space-x-4">
          {/* Avatar */}
          <div className="shrink-0 mt-1.5">
            <img
              className="w-8 h-8 rounded-full"
              src={`https://www.google.com/s2/favicons?domain=${
                props.allProps.logoUrl ? props.allProps.logoUrl : defaultUrl
              }&sz=${32}`}
              width="32"
              height="32"
              alt="User avatar"
            />
          </div>
          {/* Content */}
          <div className="grow">
            {/* Title */}
            <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              <a
                className="flex flex-col sm:flex-row gap-x-2 gap-y-1 "
                href={props.allProps.jobUrl}
                onClick={() => openInNewTab(props.allProps.jobUrl)}
                target="_blank"
                rel="noreferrer"
                type="button"
              >
                <span className="text-sm sm:text-base text-gray-300">
                  {props.allProps.airline}
                </span>{" "}
                <span className="text-slate-300 hidden sm:inline"> | </span>{" "}
                <span>{props.title}</span>
              </a>
            </h2>
            {/* Footer */}
            <footer className="flex flex-wrap text-sm">
              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-[0.8rem]">
                  {props.allProps.visibleBaseUrl
                    ? props.allProps.visibleBaseUrl
                    : "flightlevel.fyi"}
                </span>
              </div> */}
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-xs italic">
                  {props.allProps.location}
                </span>
              </div>
            </footer>
          </div>
          {/* Save button */}
          {/* <div className="shrink-0">
            <button
              className={`text-xs text-slate-400 font-semibold text-center h-12 w-12 border border-slate-700 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100 dark:outline-indigo-500/10 `}
              onClick={() => {
                if (!isAuthenticated) {
                  alert("You must be logged in to save articles.");
                } else {
                  saveArticle(props.id);
                }
              }}
            >
              {isSaved ? (
                <BookmarkIconSolid className="h-6 w-6" />
              ) : (
                <BookmarkIconOutline className="h-6 w-6" />
              )}
            </button>
          </div> */}
        </div>
      </article>
    </>
  );
}
