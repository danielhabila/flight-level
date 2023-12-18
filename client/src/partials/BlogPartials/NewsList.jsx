import React from "react";
import NewsItem from "./NewsItem.jsx";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "../ui/Loader.jsx";

function NewsList() {
  const getPosts = async () => {
    try {
      const response = await axios.get("/api/v1/fetchBlogs");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error } = useQuery(
    {
      queryKey: ["posts"],
      queryFn: getPosts,
    }
    // { staleTime: 3600000, refetchOnmount: false }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract the last blog post from the data array
  const featuredBlog = data && data.newsPosts[data.newsPosts.length - 1];

  moment.locale("custom", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "now",
      ss: "now",
      m: "now",
      mm: "today",
      h: "today",
      hh: "today",
      d: "1d",
      dd: "%dd",
      w: "1w",
      ww: "%dw",
      M: "30d+",
      MM: "30d+",
      y: "1yr",
      yy: "2yr",
    },
  });

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
        <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-10 ">
          <h2 className="h4 font-cabinet-grotesk text-gray-100 ">
            Latest Updates
          </h2>
          <Link
            to="/submit"
            className="btn-sm py-1 text-white text-base font-medium bg-sky-500 hover:bg-sky-600"
          >
            Create Post
          </Link>
        </div>

        {isLoading ? (
          <div className="grid place-content-center">
            <Loader w={16} h={16} />
          </div>
        ) : (
          <div>
            {data &&
              data.newsPosts.map((item) => {
                const date = moment(item.postDate)
                  .locale("custom")
                  .fromNow()
                  .replace("ago", "");

                return (
                  <div className="py-1.5 " key={item.id}>
                    <NewsItem
                      allProps={item}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      slug={item.slug}
                      image={item.coverPhoto && item.coverPhoto.url}
                      postDate={date}
                      excerpt={{ __html: item.content }}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsList;
