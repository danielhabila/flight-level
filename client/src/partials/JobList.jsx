import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import JobItem from "./JobItem";
import Newsletter from "./Newsletter";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";
import { PaginationContext } from "../../context/PaginationContext";

function JobList() {
  const {
    crawledJobs,
    setCrawledJobs,
    postPerPage,
    loading,
    setLoading,
    currentPage,
    setCurrentPage,
  } = useContext(PaginationContext);

  useEffect(() => {
    const fetchCrawledJobs = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/ReadJob");
        setCrawledJobs(res.data);
        console.log(crawledJobs);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchCrawledJobs();
  }, []);
  // --------------------------------------------------------------
  //get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = crawledJobs.slice(indexOfFirstPost, indexOfLastPost);

  // --------------------------------------------------------------

  moment.locale("custom", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "now",
      ss: "now",
      m: "now",
      mm: "%dmin",
      h: "h",
      hh: "%dh",
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

  // const formattedDate = moment(job.posted_date).locale("custom").fromNow();

  // console.log(formattedDate.replace("ago", "d"));

  // --------------------------------------------------------------

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader
            color={"#000"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        // Render your content here
        <div className="pb-8 md:pb-16">
          <h2 className="md:text-3xl text-xl font-bold font-inter mb-10">
            Latest jobs
          </h2>
          {/* List container */}
          <div className="flex flex-col">
            {/* {currentPosts.map((job) => { */}
            {crawledJobs.map((job) => {
              return (
                <JobItem
                  key={job._id}
                  id={job._id}
                  sticky={job.sticky}
                  title={job.jobTitle}
                  link={`/jobDescription/${job._id}`}
                />
              );
            })}

            {/* Newletter CTA */}
            <div className="py-8 border-b border-gray-200 -order-1">
              <Newsletter heading={"Send me job updates!"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobList;
