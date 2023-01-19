import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../../Redux/Features/cocktailSlice";
import { makeStyles } from "@material-ui/core";

const SearchBox = () => {
  const classes = useStyles();
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={classes.contain}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className={classes.searchbox}
              placeholder="Search Here . . . ."
              style={{ width: "350px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
  searchbox: {
    all: "unset",
    height: 35,
    paddingLeft: 15,
    borderRadius: 20,
    boxShadow: " 0px 0px 10px #3e8aad",
    cursor: "pointer",
  },
}));
