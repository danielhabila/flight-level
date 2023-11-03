import React from "react";
import NewsItem from "./NewsItem";
import moment from "moment";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usa from "../../images/usa-image.jpg";

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

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
        <h2 className="h2 font-cabinet-grotesk text-gray-100 pb-16 ">
          Aviation News
        </h2>

        {/* Articles list */}
        <div>
          {/*  Featured article */}
          <section>
            <div className="mx-auto ">
              <div className="pb-8 md:pb-16">
                <article className=" mx-auto space-y-5 md:flex md:items-center md:space-y-0 md:space-x-6 ">
                  {/* Image */}

                  <Link
                    className="relative block group overflow-hidden md:w-1/2 rounded-lg"
                    to={`/blog/`}
                    data-aos="fade-down"
                  >
                    <img
                      className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                      src={usa}
                      width={540}
                      height={340}
                      priority
                      alt=""
                    />
                  </Link>

                  {/* Content */}
                  <div className="md:w-1/2" data-aos="fade-up">
                    <header>
                      <h2 className="font-extrabold h4 md:text-3xl lg:text-4xl font-playfair-display mb-3">
                        <Link
                          className="text-slate-200 hover:underline hover:decoration-blue-100"
                          href={`/blog`}
                        >
                          Build in public, is that the way to go?
                        </Link>
                      </h2>
                    </header>
                    <p className="text-base text-slate-300 grow">
                      So, I've decided to hit a pause on my aviation job board
                      project. As much as I love planes, it just wasn't taking
                      off. Honestly,...
                    </p>
                    <footer className="flex items-center mt-4">
                      {/* Date */}
                      <div className="text-[0.8rem] text-slate-400 my-1">
                        <span className="text-sky-500">—</span> Apr 19, 2023
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* ----------------------------------- */}
          {/*  Section title */}
          <h4
            className="h4 pb-4 border-b border-gray-700 text-white"
            data-aos="fade-up"
          >
            Latest
          </h4>
          {/* ----------------------------------- */}
          {error
            ? "something went wrong"
            : isLoading
            ? "Loading..."
            : data &&
              data.newsPosts.map((item) => {
                const date = moment(item.postDate).format("MMM DD, YYYY");

                return (
                  <NewsItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    slug={item.slug}
                    image={item.coverPhoto && item.coverPhoto.url}
                    postDate={date}
                    excerpt={{ __html: item.content }}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default NewsList;
