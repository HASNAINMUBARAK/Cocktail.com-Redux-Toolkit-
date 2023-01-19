import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../../Redux/Features/cocktailSlice";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Components/Spinner";

const Home = () => {
  const classes = useStyles();
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const { cocktails, isLoading, error } = useSelector((state) => ({
    ...state.cocktailSlice,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  // modify
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink,
          strAlocholic,
          strDrinkThumb,
          strGlass,
          strDrink,
          strInstructions,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlocholic,
          glass: strGlass,
          des: strInstructions,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "200px 0px",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }
  if (!cocktails) {
    return <h2>Not such Cocktail found!</h2>;
  }
  if (error) {
    return <h2>error</h2>;
  }
  return (
    <div>
      <div className={classes.contain}>
        {modifiedCocktails.map((item) => (
          <div className={classes.card} key={item.id}>
            <img src={item.img} alt="img" className={classes.imag} />
            <div className={classes.lower}>
              <h3 className={classes.title}>{item.name}</h3>
              <p style={{ fontFamily: "cursive" }}>
                {item.des.substring(0, 50)}
              </p>
              <Link to={`/products/${item.id}`}>
                <button className={classes.btn}>Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
const useStyles = makeStyles((theme) => ({
  contain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    borderRadius: 10,

    width: 300,
    display: "flex",
    flexDirection: "column",
    margin: 20,
    boxShadow: " 0px 0px 15px #3e8aad",
    cursor: "pointer",
  },
  imag: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: "cursive",
    margin: 0,
  },
  lower: {
    margin: 10,
  },
  btn: {
    color: "#3e8aad",
    width: 150,
    height: 40,
    borderRadius: "40px",
    border: "2px solid #3e8aad",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
