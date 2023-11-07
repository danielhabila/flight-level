import React from "react";
import NewsItem from "./NewsItem";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FeaturedPost from "./FeaturedPost";
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

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
        <h2 className="h2 font-cabinet-grotesk text-gray-100 pb-16 ">
          Aviation News
        </h2>

        {isLoading ? (
          <div className="grid place-content-center">
            <Loader w={16} h={16} />
          </div>
        ) : (
          <div>
            {/*  Featured Post */}
            {featuredBlog && <FeaturedPost featuredBlog={featuredBlog} />}

            {/* Articles list */}
            <h4
              className="h4 pb-4 border-b border-gray-700 text-white"
              data-aos="fade-up"
            >
              Latest
            </h4>

            {data &&
              data.newsPosts
                .slice(
                  0,
                  data.newsPosts.length - 1
                ) /* Excludes the last post which is already in featured post */
                .reverse()
                .map((item) => {
                  const date = moment(item.postDate).format("MMM DD, YYYY");

                  return (
                    <div className="py-5 border-b border-slate-100 dark:border-slate-800 ">
                      <NewsItem
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
