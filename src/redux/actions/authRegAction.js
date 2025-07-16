import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerFailure, registerSuccess } from "../reducers/authRegReducer";

export const register = createAsyncThunk("auth/register", async (formData, { dispatch }) => {
  console.log("FormData ricevuto", formData);
  try {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      dispatch(registerFailure(data.message || "Errore nella registrazione"));
      throw new Error(data.message || "Errore nella registrazione");
    }

    // Salvataggio SOLO se la risposta è OK
    console.log("Dati ricevuti", data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch(registerSuccess());
  } catch (error) {
    dispatch(registerFailure(error.message));
    throw error;
  }
});
