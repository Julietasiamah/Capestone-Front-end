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

// Funzione Redux Thunk che verifica la presenza di token e utente nel localStorage
export const checkAuthFromLocalStorage = () => (dispatch) => {
  // Recupera il token e l'utente salvati nel localStorage
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  //Verifica se il token e l'utente sono presenti e validi
  // Se il token esiste e l'utente non è "undefined", prova a fare il parsing dell'utente
  if (token && userString !== "undefined") {
    try {
      // prova a convertire la stringa JSON in un oggetto
      const user = JSON.parse(userString);
      // Se tutto va bene, invia un'azione Redux per aggiornare lo stato di autenticazione
      dispatch(loginSuccess({ user, token }));
    } catch (error) {
      // Se la stringa non è valida (es. JSON corrotto), logga l'errore
      console.error("Errore parsing user da localStorage:", error);
      // Rimuove dati non validi dal localStorage per evitare problemi futuri
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  } else {
    // Se token o utente mancano o sono invalidi, pulisce il localStorage e avvisa nel log
    console.warn("Token o utente non trovato o non valido");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
};
