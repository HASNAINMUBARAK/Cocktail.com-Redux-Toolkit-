import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktail",
  async () => {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .catch((err) => console.log(err, "error"));
  }
);
//for Single product details
export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleCocktail",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err, "error"));
  }
);
// for search Cocktails
export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktail",
  async ({ searchText }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err, "error"));
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    isLoading: false,
    error: null,
    cocktail: {},
  },
  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // for single cocktail details
    [fetchSingleCocktail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // for search cocktails
    [fetchSearchCocktail.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default cocktailSlice.reducer;
