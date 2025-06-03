import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginError, loginSuccess } from "../reducers/authReducer";

//login con credenziali
export const login = createAsyncThunk("auth/login", async (credentials, { dispatch }) => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    console.log("Login response:", data);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch(loginSuccess({ user: data.user, token: data.token }));
  } catch (error) {
    dispatch(loginError("Credenziali errate o server non disponibile"));
    throw error;
  }
});

//verifica autenticazione da LocalStorage
/* export const checkAuthFromLocalStorage = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log(user);
  console.log(token);
  if (token && user) {
    try {
      const parsedUser = JSON.parse(user);
      dispatch(loginSuccess({ user: parsedUser, token }));
    } catch (e) {
      console.error("Errore parsing user da localStorage:", e);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }
}; */

export const checkAuthFromLocalStorage = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  console.log("user:", userString); // Debug, puoi rimuoverlo dopo

  if (token && userString && userString !== "undefined") {
    try {
      const user = JSON.parse(userString);
      dispatch(loginSuccess({ user, token }));
    } catch (error) {
      console.error("Errore parsing user da localStorage:", error);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  } else {
    console.warn("Token o utente non trovato o non valido");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
};
