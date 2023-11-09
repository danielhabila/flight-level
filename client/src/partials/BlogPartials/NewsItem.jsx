import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
  const fetched = props.excerpt.__html.html;
  const excerpt = fetched.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Link to={`/news/${props.slug}`}>
      <div
        className="flex items-start relative group overflow-hidden"
        data-aos="fade-down"
      >
        <img
          className="rounded md:rounded-md w-16 h-16 md:w-48 md:h-36 object-cover mr-6 group-hover:scale-105  transition duration-700 ease-out"
          src={props.image}
          alt={props.title}
        />
        <div className="md:space-y-4">
          {/* Title */}
          <h3 className="font-aspekta text-lg md:text-xl font-[650] mb-1 text-white hover:underline hover:decoration-blue-100 ">
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
          <div className="text-[0.7rem] text-slate-400 my-1 uppercase">
            <span className="text-sky-500">—</span> {props.postDate}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsItem;
