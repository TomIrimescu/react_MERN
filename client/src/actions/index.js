import axios from "axios";
import { FETCH_USER, LOGOUT_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
/**
 * Alternate -final refactor option for fetchUser:
 *
 * export const fetchUser = () => async dispatch =>
 dispatch({ type: FETCH_USER, payload: await axios.get("/api/current_user") });
 */

export const logoutUser = () => async dispatch => {
  const res = await axios.get("/api/logout");

  dispatch({ type: LOGOUT_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};