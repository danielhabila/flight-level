import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { GetIdsContext } from "../../context/GetIdsContext";
import mixpanel from "mixpanel-browser";

export default function NewsItem(props) {
  mixpanel.init("07f8cbf36c5b5714173ddedeb1f0eeec", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });
  const defaultUrl = "https://flightlevel.fyi/";

  const { isAuthenticated, user } = useAuth0();
  const { fetchedSavedIds, currentUserEmail, loading } =
    useContext(GetIdsContext);

  const isArticleSaved = (id) => {
    return fetchedSavedIds?.includes(id);
  };
  const [isSaved, setIsSaved] = useState(isArticleSaved(props.id));

  const openInNewTab = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.focus();
    }
    mixpanel.track("Testing news item click");
  };

  const saveArticle = async (savedNewsId) => {
    try {
      if (isSaved) {
        // If already saved, remove from saved articles
        await axios.patch("/api/savedNews/remove", {
          currentUserEmail,
          savedNewsId,
        });
        setIsSaved(false);
      } else {
        // If not saved, add to saved articles
        const response = await axios.patch("/api/savedNews/add", {
          currentUserEmail,
          savedNewsId,
        });
        if (response.status === 200) {
          setIsSaved(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  // initializing the isSaved state when the component mounts.
  useEffect(() => {
    setIsSaved(isArticleSaved(props.id));
  }, [props.id, fetchedSavedIds]);

  return (
    <>
      <article className="bg-slate-800/40 shadow-md rounded-md border border-slate-700 p-5">
        <div className="flex flex-start space-x-4">
          {/* Avatar */}
          <div className="shrink-0 mt-1.5">
            <img
              className="w-8 h-8 rounded-full"
              src={`https://www.google.com/s2/favicons?domain=${
                props.allProps.postUrl ? props.allProps.postUrl : defaultUrl
              }&sz=${32}`}
              width="32"
              height="32"
              alt="User avatar"
            />
          </div>
          {/* Content */}
          <div className="grow">
            {/* Title */}
            <h2 className="font-semibold text-slate-100 mb-2">
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
              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-600 after:px-2">
                <a
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                  href="#0"
                >
                  <div className="flex items-center">
                    {props.allProps.author
                      ? props.allProps.author
                      : "flightlevel.fyi"}
                  </div>
                </a>
              </div> */}
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-[0.8rem]">
                  {props.allProps.visibleBaseUrl
                    ? props.allProps.visibleBaseUrl
                    : "flightlevel.fyi"}
                </span>
              </div>
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-600 after:px-2">
                <span className="text-slate-500 text-xs italic">
                  {props.postDate}
                </span>
              </div>

              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-600 after:px-2">
                <span className="text-slate-500">688 Comments</span>
              </div> */}
            </footer>
          </div>
          {/* Upvote button */}
          <div className="shrink-0">
            {isSaved ? (
              <button
                className="text-xs font-semibold text-center h-12 w-12 border border-[#37BDF7] rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-500/10"
                onClick={() => {
                  if (!isAuthenticated) {
                    alert("You must be logged in to save articles.");
                  } else {
                    saveArticle(props.id);
                  }
                }}
              >
                <svg
                  className="inline-flex fill-[#2fbefb] mt-1.5 mb-1.5"
                  width="12"
                  height="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m0 6 6-6 6 6z" />
                </svg>
              </button>
            ) : (
              <button
                className="text-xs font-semibold text-center h-12 w-12 border border-slate-700 hover:border-slate-600 rounded-sm flex flex-col justify-center items-center"
                disabled={isSaved}
                onClick={() => {
                  if (!isAuthenticated) {
                    alert("You have to be logged in to vote.");
                  } else {
                    saveArticle(props.id);
                  }
                }}
              >
                <svg
                  className="inline-flex fill-slate-500 mt-1.5 mb-1.5"
                  width="12"
                  height="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m0 6 6-6 6 6z" />
                </svg>
              </button>
            )}
          </div>
          {/* Save button */}
          {/* <div className="shrink-0">
            <button
              className={`text-xs text-slate-400 font-semibold text-center h-12 w-12 border border-slate-700 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-500/10 `}
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
