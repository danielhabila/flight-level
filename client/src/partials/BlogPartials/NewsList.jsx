import React from "react";
import NewsItem from "./NewsItem.jsx";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FeaturedPost from "./FeaturedPost";
import Loader from "../ui/Loader.jsx";
import NewsItem2 from "./NewsItem.jsx";

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
  console.log("allNews", data);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extract the last blog post from the data array
  const featuredBlog = data && data.newsPosts[data.newsPosts.length - 1];

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
        <h2 className="h2 font-cabinet-grotesk text-gray-100 pb-2 mb-16 border-b border-gray-700">
          Latest Updates
        </h2>

        {isLoading ? (
          <div className="grid place-content-center">
            <Loader w={16} h={16} />
          </div>
        ) : (
          <div>
            {/*  Featured Post */}
            {/* {featuredBlog && <FeaturedPost featuredBlog={featuredBlog} />} */}

            {/* Articles list */}
            {/* <h4
              className="h4 pb-4 border-b border-gray-700 text-white"
              data-aos="fade-up"
            >
              Latest
            </h4> */}

            {data &&
              data.newsPosts.map((item) => {
                const date = moment(item.postDate).format("MMM DD, YYYY");

                return (
                  <div className="py-2 ">
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
