import {
  takeEvery,
  call,
  put
  // , delay
} from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USERS,
  // EDITED,
  FETCH_USERS_ASYNC,
  // FETCH_USERS_ASYNC_ERROR,
  ADD_USER,
  ADD_USER_ASYNC,
  EDIT_USER,
  DELETE_USER,
  DELETE_USER_ASYNC,
  EDIT_USER_ASYNC
} from "../actions/actionTypes";
import { fetchUsers } from "./api";

export default function* rootWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
  yield takeEvery(ADD_USER, addUserAsync);
  yield takeEvery(EDIT_USER, editUserAsync);
  yield takeEvery(DELETE_USER, deleteUserAsync);
}

export function* fetchUsersAsync() {
  let response = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: response.data });
}

export function* addUserAsync(action) {
  yield axios.post(`https://localhost:44383/api/users`, {
    email: action.payload.email,
    firstName: action.payload.firstName,
    lastName: action.payload.lastName
  });

  yield put({ type: ADD_USER_ASYNC, payload: action.payload });
}

export function* editUserAsync(action) {
  axios.put(
    `https://localhost:44383/api/users/` + action.payload.iD,
    action.payload
  );
  yield put({ type: EDIT_USER_ASYNC, payload: action.payload });
  const data = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: data.data });
}

export function* deleteUserAsync(action) {
  axios.delete("https://localhost:44383/api/users/" + action.payload);
  yield put({ type: DELETE_USER_ASYNC, payload: action.payload });
}
