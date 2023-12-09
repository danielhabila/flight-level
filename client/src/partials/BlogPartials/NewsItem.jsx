import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import axios from "axios";
import { GetIdsContext } from "../../context/GetIdsContext";
import { useCookies } from "react-cookie";

// export const getUserId = () => {
//   return window.localStorage.getItem("userId");
// };
// const currentUserId = getUserId();

export default function NewsItem(props) {
  const { fetchedSavedIds, currentUserId, loading } = useContext(GetIdsContext);
  const [cookies] = useCookies(["access_token"]);

  const isArticleSaved = (id) => {
    return fetchedSavedIds?.includes(id);
  };
  const [isSaved, setIsSaved] = useState(isArticleSaved(props.id));

  const openInNewTab = (url) => {
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.focus();
    }
  };

  const saveArticle = async (savedNewsId) => {
    try {
      if (isSaved) {
        // If already saved, remove from saved articles
        await axios.patch(
          "/api/savedNews/remove",
          {
            currentUserId,
            savedNewsId,
          },
          {
            headers: { authorization: cookies.access_token },
          }
        );
        setIsSaved(false);
      } else {
        // If not saved, add to saved articles
        const response = await axios.patch(
          "/api/savedNews/add",
          {
            currentUserId,
            savedNewsId,
          },
          {
            headers: { authorization: cookies.access_token },
          }
        );
        if (response.status === 200) {
          setIsSaved(true);
        }
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
            <button
              className={`text-xs text-slate-400 font-semibold text-center h-12 w-12 border border-slate-700 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100 dark:outline-indigo-500/10 `}
              // disabled={isSaved}
              onClick={() => saveArticle(props.id)}
            >
              {isSaved ? (
                <BookmarkIconSolid className="h-6 w-6" />
              ) : (
                <BookmarkIconOutline
                  className="h-6 w-6"

                  // onClick={() => console.log(props.id)}
                />
              )}
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
