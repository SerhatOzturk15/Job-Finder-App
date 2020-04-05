import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 350,
    backgroundSize: "contain",
  },
});

const Job = ({
  isLoading,
  job = {},
  jobImage,
  noJobImage,
  goBack,
  goBackText,
}) => {
  const classes = useStyles();

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
                  image={noJobImage}
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
              <Button
                size="small"
                color="primary"
                onClick={() => goBack()}
                data-testid="goBackButton"
              >
                {goBackText}
              </Button>
            </CardActions>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Job;
