import React from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export const getUserId = () => {
  return window.localStorage.getItem("userId");
};

export default function NewsItem(props) {
  const currentUserId = getUserId();

  const openInNewTab = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.focus();
    }
  };

  const saveArticle = async (savedNewsId) => {
    try {
      const response = await axios.patch("/api/savedNews/add", {
        currentUserId,
        savedNewsId,
      });
      if (response.status === 200) {
        alert("Article saved!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <article className="bg-white dark:bg-slate-800/40 shadow-md rounded-md border border-slate-200 dark:border-slate-700 p-5">
        <div className="flex flex-start space-x-4">
          {/* Avatar */}
          <div className="shrink-0 mt-1.5">
            <img
              className="w-8 h-8 rounded-full"
              src={`https://www.google.com/s2/favicons?domain=${
                props.allProps.postUrl ? props.allProps.postUrl : url
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
                href={props.allProps.postUrl}
                onClick={() => openInNewTab(props.allProps.postUrl)}
                target="_blank"
                rel="noreferrer"
                type="button"
              >
                {props.title}
              </a>
            </h2>
            {/* Footer */}
            <footer className="flex flex-wrap text-sm">
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <a
                  className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  href="#0"
                >
                  <div className="flex items-center">
                    {/* <svg
                      className="w-4 h-4 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.686 5.708 10.291.313c-.4-.4-.999-.4-1.399 0s-.4 1 0 1.399l.6.6-6.794 3.696-1-1C1.299 4.61.7 4.61.3 5.009c-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 14.001 2 15.4l3.696-3.697L9.692 15.7c.5.5 1.199.2 1.398 0 .4-.4.4-1 0-1.4l-.999-.998 3.697-6.695.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499Zm-7.193 6.095L4.196 7.507l6.695-3.697 1.298 1.299-3.696 6.694Z" />
                    </svg> */}
                    {props.allProps.author
                      ? props.allProps.author
                      : "flightlevel.fyi"}
                  </div>
                </a>
              </div>
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-[0.8rem]">
                  {props.allProps.visibleBaseUrl
                    ? props.allProps.visibleBaseUrl
                    : "flightlevel.fyi"}
                </span>
              </div>
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-xs">{props.postDate}</span>
              </div>

              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                <span className="text-slate-500">688 Comments</span>
              </div> */}
            </footer>
          </div>
          {/* Upvote button */}
          <div className="shrink-0">
            <button className="text-xs text-slate-400 font-semibold text-center h-12 w-12 border border-slate-700 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100 dark:outline-indigo-500/10">
              <BookmarkIcon
                className="h-6 w-6"
                onClick={() => saveArticle(props.id)}
                // onClick={() => console.log(props.id)}
              />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
