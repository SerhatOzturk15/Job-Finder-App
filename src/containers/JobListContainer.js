import React, { useEffect, useState } from "react";
import { JobList } from "../components";
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
    <JobList jobs={jobs} />
  );
};

export default JobListContainer;
