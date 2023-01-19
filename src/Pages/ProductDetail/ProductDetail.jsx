import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../Redux/Features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import LoadingSpinner from "../../Components/Spinner";
import { BsFillBackspaceFill } from "react-icons/bs";

const ProductDetail = () => {
  const classes = useStyles();
  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { isLoading, cocktail } = useSelector((state) => ({
    ...state.cocktailSlice,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: des,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
        des,
      };
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients, des } =
      modifendCocktail;
    return (
      <>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "200px 0px",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          <div>
            <div className={classes.go}>
              <Link to="/" className="btn btn-info">
                <BsFillBackspaceFill style={{ margin: "20px 0px 0px 40px" }} />
              </Link>
            </div>
            <div className={classes.outer}>
              <div className={classes.outter}>
                <div className={classes.left}>
                  <img src={img} alt={name} className={classes.img} />
                </div>
                <div className={classes.right}>
                  <h2 style={{ fontFamily: "cursive" }}>Title: {name}</h2>
                  <p
                    className="mt-1"
                    style={{ fontFamily: "cursive", opacity: 0.7 }}
                  >
                    Category : {category}
                  </p>
                  <p style={{ fontFamily: "cursive", opacity: 0.7 }}>
                    Info : {info}
                  </p>
                  <p style={{ fontFamily: "cursive", opacity: 0.7 }}>
                    Glass : {glass}
                  </p>
                  <p style={{ fontFamily: "cursive", opacity: 0.7 }}>
                    Ingredients : {ingredients + " ,"}
                  </p>
                  <p style={{ fontFamily: "cursive", opacity: 0.7 }}>
                    Description: {des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ProductDetail;
const useStyles = makeStyles((theme) => ({
  outer: {
    display: "flex",
    justifyContent: "center",
  },
  outter: {
    width: "70%",
    margin: "40px 0px",
    padding: 40,
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: 10,
    boxShadow: " 0px 0px 15px #3e8aad",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  go: {},
  img: {
    width: 350,
    borderRadius: 10,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  right: {
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
}));
