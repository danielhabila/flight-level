import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function FeaturedPost(props) {
  return (
    <>
      <section>
        <div className="mx-auto ">
          <div className="pb-8 md:pb-16">
            <article className=" mx-auto space-y-5 md:flex md:items-center md:space-y-0 md:space-x-6 ">
              {/* Image */}

              <Link
                className="relative block group overflow-hidden md:w-1/2 rounded-lg"
                to={`/${props.featuredBlog.slug}`}
                data-aos="fade-down"
              >
                <img
                  className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                  src={
                    props.featuredBlog.coverPhoto &&
                    props.featuredBlog.coverPhoto.url
                  }
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
                      to={`/${props.featuredBlog.slug}`}
                    >
                      {props.featuredBlog.title}
                    </Link>
                  </h2>
                </header>
                {/* Excerpt text */}
                <div className="flex">
                  <div
                    className="grow text-base text-slate-300"
                    dangerouslySetInnerHTML={{
                      __html:
                        props.featuredBlog.content &&
                        props.featuredBlog.content.html
                          .split(" ")
                          .slice(0, 20)
                          .join(" ") + "...",
                    }}
                  ></div>
                </div>
                <footer className="flex items-center mt-4">
                  {/* Date */}
                  <div className="text-[0.8rem] text-slate-400 my-1 uppercase">
                    <span className="text-sky-500 ">—</span>{" "}
                    {moment(props.featuredBlog.postDate).format("MMM DD, YYYY")}
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
