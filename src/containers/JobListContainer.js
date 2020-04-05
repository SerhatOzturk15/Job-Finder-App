import React, { useEffect, useState } from "react";
import { JobList, Navbar } from "../components";
import { BASEURL } from "./../util";

const JobListContainer = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`${BASEURL}/getJobs`)
      .then((res) => res.json())
      .then((result) => {
        setJobs(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar title="Job Finder App" />
      <JobList jobs={jobs} />
    </>
  );
};

export default JobListContainer;
