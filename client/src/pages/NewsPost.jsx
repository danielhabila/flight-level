import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import BgSVG from "../partials/ui/BgSVG";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import parse from "html-react-parser";
import Loader from "../partials/ui/Loader.jsx";

function NewsPost() {
  const { slug } = useParams();

  const getSinglePost = async () => {
    try {
      const response = await axios.get(`/api/v1/single-post/${slug}`);
      console.log(response.data);
      return response.data.newsPosts[0];
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, error, isFetching } = useQuery(
    {
      queryKey: ["singlePosts"],
      queryFn: getSinglePost,
    }
    // { staleTime: 3600000, refetchOnmount: false }
  );

  // console.log(data);
  // ----------------------------------------------------

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // if (!data) {
  //   return null;
  // }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />

        {/* Middle area */}
        <main className="grow py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0 py-10">
            {isLoading ? (
              <div className="grid place-content-center">
                <Loader w={16} h={16} />
              </div>
            ) : (
              <article>
                {/* Post header */}
                <header>
                  {/* Title */}
                  <h1 className="h2  font-aspekta my-4 text-white">
                    {data && data.title}
                  </h1>
                  {/* Date and Share buttons */}
                  <div className="mb-3 flex justify-between items-center">
                    <div className="flex items-center justify-between my-6">
                      {/* Post date */}
                      <div className="text-xs text-slate-400 uppercase">
                        <span className="text-sky-500">—</span> Dec 24, 2023{" "}
                        <span>·</span> 4 Min read
                      </div>
                    </div>
                    {/* Share buttons */}
                    <ul className="inline-flex ">
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Twitter"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Share"
                        >
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>
                {/* Post content */}
                <div>
                  <div>
                    {data && (
                      <img
                        src={data.coverPhoto.url}
                        alt={data.title}
                        className="mx-auto rounded-md w-full "
                      />
                    )}
                  </div>

                  <div className="content mt-14 mx-auto text-slate-300 ">
                    {data && parse(data.content.html)}
                  </div>
                </div>
              </article>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default NewsPost;
