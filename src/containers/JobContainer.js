import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Job, Navbar } from "../components";
import { BASEURL } from "./../util";
import noJobImage from "./../nojob.jpg";
import jobImage from "./../jobs.jpg";

const JobContainer = ({ match }) => {
  const { id } = match.params;
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASEURL}/getAJob/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result.item);
        setIsLoading(false);
      })
      .catch(() => {
        setJob({});
        setIsLoading(false);
      });
  }, [id]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <Navbar title="Job Finder App" />
      <Job
        job={job}
        match={match}
        isLoading={isLoading}
        jobImage={jobImage}
        noJobImage={noJobImage}
        history={history}
        goBack={goBack}
        goBackText={"Go Back"}
      />
    </>
  );
};

export default JobContainer;
