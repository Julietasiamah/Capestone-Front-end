import { SET_RECIPE, SET_RECIPE_ERROR, SET_RECIPE_LOADING } from "../actions/recipeAction";

const initialState = {
  recipe: null,
  loading: false,
  error: null,
};
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    case SET_RECIPE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default recipeReducer;
