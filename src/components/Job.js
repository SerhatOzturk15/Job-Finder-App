import React from "react";
import useStyles from './styles/styles'
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
          className={classes.circular}
          size={100}
          disableShrink
        />
      ) : (
          <Container data-testid="job-container" maxWidth="sm">
            <Card className={classes.job}>
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
