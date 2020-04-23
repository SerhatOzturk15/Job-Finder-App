import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  job: {
    maxWidth: 500,
  },
  media: {
    height: 350,
    backgroundSize: "contain !important",
  },
  circular: {
    position: "absolute",
    top: "30%",
    left: "50%"
  },
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "0 auto !important",
    textDecoration: "none",
    marginTop: 16,
  },
  listItemText: {
    fontSize: "2em !important",
    textDecoration: "none",
  },
  listItem: {
    "&:hover, &:focus": {
      backgroundColor: "gray",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: `${deepOrange[500]} !important`,
  },
  navlink: {
    textDecoration: "none",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  navbar: {
    marginBottom: "16px",
    color: "black",
  },
}));

export default useStyles