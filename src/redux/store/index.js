import { configureStore } from "@reduxjs/toolkit";
import mealPlanReducer from "../reducers/mealPlanreducer";

const store = configureStore({
  reducer: {
    mealPlan: mealPlanReducer,
  },
});

export default store;
