import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Hamburger from "../Hamburger";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";


const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.container}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item lg={1} md={2} sm={2} className={classes.grid1}>
          <Link to="/">
            <FaCocktail
              style={{ fontSize: "2.5rem", color: "#3E8AAD" }}
              className={classes.logo}
            />
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={5}
          md={5}
          sm={5}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/" className={classes.g2}>
            Home
          </Link>
          <Link to="/About" className={classes.g2}>
            {" "}
            About
          </Link>
          <Link to="/Contact" className={classes.g2}>
            {" "}
            Contact
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={5}
          md={5}
          sm={5}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <form className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search Here" />
          </form>
        </Grid>
        {/* <Grid
          item
          container
          lg={1}
          md={1}
          sm={1}
          className={classes.grid4}
          display="flex"
          alignItems="center"
        >
          <Link to="/cart">
            <button className={classes.btn}>
              <AcUnitIcon />
            </button>
          </Link>
        </Grid> */}
        <Grid item className={classes.drawer}>
          <Hamburger />
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 0px",
    boxShadow: "0px 0px 10px 0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  grid1: {
    paddingLeft: 20,
  },
  logo: {
    display: "flex",
    width: "60px",
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  g2: {
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      color: "#3e8aad",
      fontWeight: 700,
    },
  },
  grid3: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grid4: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  drawer: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  image: {
    width: "100px",
  },
  btn: {
    color: "white",
    backgroundColor: "#2250f4",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
    "&:hover": {
      color: " #3e8aad",
    },
  },
}));
export default Navbar;
