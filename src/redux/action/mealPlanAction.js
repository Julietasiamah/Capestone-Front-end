export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

//fetch dei pasti
export const fetchWeeklyMealPlan = async (diet, usedMealIds) => {
  const API_KEY = "f1e25e23f28944539e74856b31263ebb";
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=${diet}&number=10&addRecipeInformation=true`;

  const resp = await fetch(url);
  if (!resp.ok) throw new Error("Errorre nella chiamata");

  const data = await resp.json();

  const uniqueMeals = data.results.filter((meal) => !usedMealIds.includes(meal.id));

  //condizione per avere solamente due pasti (PRANZO E CENA)
  if (uniqueMeals.length >= 2) {
    return uniqueMeals.slice(0, 2);
  }
  throw new Error("Pasti non sufficienti");
};

//imposto una funzione per ricevere un tipo di dieta come argomento(funzione asincrona)
export const generateWeeklyPlanFromSearch = (diet) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    //oggetto vuoto che conterrà i pasti per ogni giorno della settimana
    const week = {};
    //tiene traccia degli ID dei pasti già usati per evitare ripetizioni
    const usedMealIds = [];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //generazione di pasti al giorno
    for (const day of days) {
      const meals = await fetchWeeklyMealPlan(diet, usedMealIds);
      //salva due pasti nel giorno corrente all'interno dell'oggetto week
      week[day] = { meals };
      //aggiunge gli ID dei pasti ricevuti all'array per evitare duplicati
      usedMealIds.push(...meals.map((meal) => meal.id));
    }
    //salvo il piano settimanale nello stato redux
    dispatch({
      type: SET_WEEKLY_PLAN,
      payload: { week },
    });
    //in caso di errore, lo salvo nello stato redux
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.message,
    });
  }
};
