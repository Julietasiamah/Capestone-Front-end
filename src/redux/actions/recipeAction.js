export const SET_RECIPE = "SET_RECIPE";
export const SET_RECIPE_LOADING = "SET_RECIPE_LOADING";
export const SET_RECIPE_ERROR = "SET_RECIPE_ERROR";

export const fetchRecipeByMealId = (id) => async (dispatch, getState) => {
  dispatch({ type: SET_RECIPE_LOADING });

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/ricetta/pasto/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    } //throw new Error("Errore nella richiesta");

    const data = await response.json();

    // Prendo lo stato corrente per accedere al weeklyPlan
    const state = getState();
    const weeklyPlan = state.mealPlan.weeklyPlan;

    // Cerca il pasto per aggiungere imgUrl e nome
    let meal = null;
    if (weeklyPlan?.week) {
      meal = Object.values(weeklyPlan.week)
        .flatMap((day) => day.meals)
        .find((m) => m.pasto?.id?.toString() === id || m.id?.toString() === id);
    }

    // Unisci i dati della ricetta con quelli del meal
    const combinedRecipe = meal ? { ...data, imgUrl: meal.imgUrl, nome: meal.nome } : data;

    dispatch({ type: SET_RECIPE, payload: combinedRecipe });
  } catch (error) {
    dispatch({ type: SET_RECIPE_ERROR, payload: error.message });
  }
};
