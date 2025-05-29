export const SET_WEEKLY_PLAN = "SET_WEEKLY_PLAN";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

/*export const generateWeeklyPlanFromSearch = (diet) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  //fetch data from backend
  try {
    const response = await fetch(`http://localhost:8080/piano_settimanale/preferenza/${diet}`);
    if (!response.ok) throw new Error("Errore nella chiamata");

    const data = await response.json();

    // Riorganizza per giorno
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

    data.forEach((entry) => {
      const day = dayMap[entry.giorno];
      if (!week[day]) {
        week[day] = { meals: [] };
      }

      // Costruisco l'oggetto meal da usare nel componente
      week[day].meals.push({
        nome: entry.pasto.nome,
        descrizione: entry.pasto.ricetta.procedimento,
        imgUrl: entry.pasto.imgUrl,
        id: entry.pasto.id || `${entry.giorno}-${entry.categoriaPasto}`, // fallback
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
 */

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

    data.forEach((entry) => {
      const day = dayMap[entry.giorno];
      if (!week[day]) {
        week[day] = { meals: [] };
      }

      week[day].meals.push({
        nome: entry.pasto.nome,
        descrizione: entry.pasto.ricetta.procedimento,
        imgUrl: entry.pasto.imgUrl,
        id: entry.pasto.id || `${entry.giorno}-${entry.categoriaPasto}`,
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
