import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import nojobImage from "./../nojob.jpg";
import jobImage from "./../jobs.jpg";
import { BASEURL } from "./../util";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  CircularProgress
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },
  media: {
    height: 350,
    backgroundSize: "contain"
  }
});

const Job = ({ match, location }) => {
  const classes = useStyles();
  const { id } = match.params;
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASEURL}/getAJob/${id}`)
      .then(res => res.json())
      .then(result => {
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
      {isLoading ? (
        <CircularProgress
          style={{ position: "absolute", top: "30%", left: "50%" }}
          size={100}
          disableShrink
        />
      ) : (
        <Container data-testid="job-container" maxWidth="sm">
          <Card className={classes.root}>
            <CardActionArea>
              {Object.keys(job).length > 0 ? (
                <CardMedia
                  className={classes.media}
                  image={jobImage}
                  data-testid="job-found-image"
                  title="Contemplative Reptile"
                />
              ) : (
                <CardMedia
                  className={classes.media}
                  image={nojobImage}
                  data-testid="job-not-found-image"
                  title="Contemplative Reptile"
                />
              )}

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {job.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {job.employment_type}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => goBack()}>
                Go Back
              </Button>
            </CardActions>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Job;
