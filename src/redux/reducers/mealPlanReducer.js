import { SET_ERROR, SET_LOADING, SET_WEEKLY_PLAN, UPDATE_MEAL_PLAN_WEEK } from "../actions/mealPlanAction";

// Stato iniziale
const initialState = {
  weeklyPlan: null,
  loading: false,
  error: null,
};

const mealPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    //mostra loading spinner quando la pagina sta caricando
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SET_WEEKLY_PLAN:
      return {
        ...state,
        weeklyPlan: action.payload,
        loading: false,
        error: null,
      };

    case UPDATE_MEAL_PLAN_WEEK:
      return {
        ...state,
        weeklyPlan: {
          ...state.weeklyPlan,
          week: action.payload,
        },
        loading: false,
        error: null,
      };
    //gestione errore in caso di problemi con  API
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mealPlanReducer;
