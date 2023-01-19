import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "../src/Redux/Features/cocktailSlice";
export default configureStore({
  reducer: {
    cocktailSlice: cocktailSlice,
  },
});
