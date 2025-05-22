import { configureStore } from "@reduxjs/toolkit";
import mealPlanReducer from "../reducers/mealPlanreducer";
import authReducer from "../reducers/authReducer";
import recipeReducer from "../reducers/recipeReducer";

const store = configureStore({
  reducer: {
    mealPlan: mealPlanReducer,
    auth: authReducer,
    recipeDetails: recipeReducer,
  },
});

export default store;
