import { configureStore } from "@reduxjs/toolkit";
import mealPlanReducer from "../reducers/mealPlanreducer";
import recipeReducer from "../reducers/recipeReducer";
import authReducer from "../reducers/authReducer";

const store = configureStore({
  reducer: {
    mealPlan: mealPlanReducer,
    recipeDetails: recipeReducer,
    auth: authReducer,
  },
});

export default store;
