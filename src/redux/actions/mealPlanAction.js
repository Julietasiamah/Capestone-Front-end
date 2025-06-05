export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_MEAL_PLAN_WEEK = "UPDATE_MEAL_PLAN_WEEK";

export const generateWeeklyPlanFromSearch = (diet) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const token = localStorage.getItem("token");
    console.log("JWT token:", token);

    const response = await fetch(`http://localhost:8080/piano_settimanale/preferenza/${diet}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Errore nella chiamata");

    const data = await response.json();

    const week = {};
    const dayMap = {
      LUNEDI: " LUNEDI",
      MARTEDI: " MARTEDI",
      MERCOLEDI: " MERCOLEDI",
      GIOVEDI: " GIOVEDI",
      VENERDI: " VENERDI",
      SABATO: " SABATO",
      DOMENICA: " DOMENICA",
    };

    /*  data.forEach((entry) => {
      const day = dayMap[entry.giorno];
      if (!week[day]) {
        week[day] = { meals: [] };
      } */

    /* week[day].meals.push({
        nome: entry.pasto.nome,
        descrizione: entry.pasto.ricetta.procedimento,
        imgUrl: entry.pasto.imgUrl,
        id: entry.pasto.id || `${entry.giorno}-${entry.categoriaPasto}`,
      });
    }); */

    // Raggruppa pasti per giorno e categoria
    const groupedByDayAndType = {};

    data.forEach((entry) => {
      const giorno = dayMap[entry.giorno];
      const categoria = entry.categoriaPasto; // Es. "PRANZO" o "CENA"

      if (!groupedByDayAndType[giorno]) {
        groupedByDayAndType[giorno] = { PRANZO: [], CENA: [] };
      }

      groupedByDayAndType[giorno][categoria].push(entry);
    });

    // Per ogni giorno, scegli 1 pranzo e 1 cena random
    Object.entries(groupedByDayAndType).forEach(([giorno, pastiPerTipo]) => {
      week[giorno] = { meals: [] };

      ["PRANZO", "CENA"].forEach((categoria) => {
        const pasti = pastiPerTipo[categoria];
        if (pasti && pasti.length > 0) {
          const randomIndex = Math.floor(Math.random() * pasti.length);
          const entry = pasti[randomIndex];
          week[giorno].meals.push({
            nome: entry.pasto.nome,
            descrizione: entry.pasto.ricetta.procedimento,
            imgUrl: entry.pasto.imgUrl,
            id: entry.pasto.id || `${entry.giorno}-${entry.categoriaPasto}`,
          });
        }
      });
    });

    dispatch({
      type: SET_WEEKLY_PLAN,
      payload: { week },
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.message,
    });
  }
};
export const updateMealPlanWeek = (newWeek) => ({
  type: UPDATE_MEAL_PLAN_WEEK,
  payload: newWeek,
});
