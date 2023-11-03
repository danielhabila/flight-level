import React from "react";
import { useNavigate } from "react-router-dom";

function NewsItem(props) {
  const navigate = useNavigate();

  const fetched = props.excerpt.__html.html;
  const excerpt = fetched.split(" ").slice(0, 30).join(" ") + " ...";

  return (
    <article
      className="py-5 border-b border-slate-100 dark:border-slate-800  cursor-pointer"
      onClick={() => navigate(props.slug)}
    >
      <div className="flex items-start ">
        <img
          className="rounded md:rounded-md w-16 h-16 md:w-48 md:h-36 object-cover mr-6"
          src={props.image}
          alt={props.title}
        />
        <div className="md:space-y-4">
          {/* Title */}
          <h3 className="font-aspekta text-lg md:text-xl font-[650] mb-1 text-white">
            {props.title}
          </h3>
          {/* Excerpt text */}
          <div className="flex">
            <div
              className="grow text-sm text-slate-300"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>
          </div>
          {/* Date */}
          <div className="text-[0.7rem] text-slate-400 my-1">
            <span className="text-sky-500">—</span> {props.postDate}
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
