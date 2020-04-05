import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import WorkIcon from "@material-ui/icons/Work";
import { deepOrange } from "@material-ui/core/colors";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "0 auto",
    textDecoration: "none",
    marginTop: 16,
  },
  listItemText: {
    fontSize: "2em",
    textDecoration: "none",
  },
  listItem: {
    "&:hover, &:focus": {
      backgroundColor: "gray",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

const JobList = ({ jobs = [] }) => {
  const classes = useStyles();
  return (
    <>
      <List className={classes.root} data-testid="job-list">
        {jobs.map((user, index) => (
          <h5 key={index} data-testid="job-item">
            <Link className={classes.link} to={`/job/${user.id}`}>
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={user.title}
                  data-testid="job-title"
                />
              </ListItem>
            </Link>
          </h5>
        ))}
      </List>
    </>
  );
};

export default JobList;
