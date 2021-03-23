import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { SET_USER } from "../constants";

export function* watcherSaga() {
  yield takeLatest(SET_USER, handleGetUser);
}
