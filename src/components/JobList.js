import React from "react";
import { Link } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import useStyles from './styles/styles'
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
} from "@material-ui/core";

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
