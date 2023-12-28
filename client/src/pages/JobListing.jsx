import React, { useContext } from "react";
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";
import BgSVG from "../partials/ui/BgSVG.jsx";
import { useQuery } from "@tanstack/react-query";
import Loader from "../partials/ui/Loader.jsx";
import moment from "moment";
import axios from "axios";
import JobItem from "../partials/JobItem.jsx";

export default function Account() {
  const { data, isLoading, error } = useQuery(
    ["job-posts"],
    async () => {
      const response = await axios.get("/api/fetch-jobs");
      if (!response === 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
    {
      //   refetchOnMount: true,
    }
  );

  if (error) {
    return (
      <div className="grid place-items-center h3 mt-20 text-gray-400">
        Error fetching data :(
      </div>
    );
  }

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
    <div className="relative isolate overflow-hidden bg-gray-900">
      <BgSVG />
      <div className="flex flex-col min-h-screen overflow-hidden ">
        <Header />
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <main className=" grow py-16 md:py-24">
            <section className="relative">
              {/* Content here ----------------------------*/}

              <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
                <h2 className="h4 sm:text-3xl font-cabinet-grotesk text-gray-100 pb-2 mb-16 border-b border-gray-700">
                  Jobs
                </h2>

                {isLoading ? (
                  <div className="grid place-content-center">
                    <Loader w={16} h={16} />
                  </div>
                ) : (
                  <div>
                    {data &&
                      !isLoading &&
                      data.jobPosts.map((item) => {
                        const date = moment(item.postDate)
                          .locale("custom")
                          .fromNow()
                          .replace("ago", "");
                        return (
                          <div className="pt-3" key={item.id}>
                            <JobItem
                              allProps={item}
                              id={item.id}
                              title={item.title}
                              slug={item.slug}
                              image={item.coverPhoto && item.coverPhoto.url}
                              postDate={date}
                            />
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {/* Content here ----------------------------*/}
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
