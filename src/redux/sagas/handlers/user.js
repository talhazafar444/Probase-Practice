import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/user/userReducer";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser(action.payload));
    const { data } = response;
    console.log("handler response data: ",data)

    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
