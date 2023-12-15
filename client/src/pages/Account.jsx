import React, { useContext } from "react";
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";
import BgSVG from "../partials/ui/BgSVG.jsx";
import { useQuery } from "@tanstack/react-query";
import Loader from "../partials/ui/Loader.jsx";
import { GetIdsContext } from "../context/GetIdsContext";
import moment from "moment";
import axios from "axios";
import NewsItem from "../partials/BlogPartials/NewsItem.jsx";

export default function Account() {
  const { fetchedSavedIds, loading } = useContext(GetIdsContext);

  const { data, isLoading, error } = useQuery(
    ["posts"],
    async () => {
      const response = await axios.get("/api/savedNews/", {
        params: { fetchedSavedIds: fetchedSavedIds },
      });
      if (!response === 200) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
    {
      enabled: !loading && fetchedSavedIds.length > 0,
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
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
                  Upvotes
                </h2>

                {isLoading ? (
                  <div className="grid place-content-center">
                    <Loader w={16} h={16} />
                  </div>
                ) : (
                  <div>
                    {fetchedSavedIds?.length > 0 ? ( // Check if fetchedSavedIds is not empty
                      data &&
                      data.newsPosts.reverse().map((item) => {
                        const date = moment(item.postDate)
                          .locale("custom")
                          .fromNow()
                          .replace("ago", "");
                        return (
                          <div className="py-2" key={item.id}>
                            <NewsItem
                              allProps={item}
                              id={item.id}
                              title={item.title}
                              slug={item.slug}
                              image={item.coverPhoto && item.coverPhoto.url}
                              postDate={date}
                              excerpt={{ __html: item.content }}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <div className="grid place-items-center h3 h-fit text-gray-400 gap-10">
                        You have not cast any votes
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-28 h-28"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    )}
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
