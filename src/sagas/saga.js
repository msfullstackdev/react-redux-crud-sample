import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
  FETCH_USERS,
  EDITED,
  FETCH_USERS_ASYNC,
  FETCH_USERS_ASYNC_ERROR,
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

function* fetchUsersAsync() {
  const data = yield call(fetchUsers);
  alert("api called");
  if (data === "json failed") {
    yield put({ type: FETCH_USERS_ASYNC_ERROR, payload: data });
   
  } else {
    yield put({ type: FETCH_USERS_ASYNC, payload: data });
  }
}

function* addUserAsync(action) {
  const apiResult = yield fetch("https://localhost:44384/api/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(action.payload)
  })
    .then(res => res.json())
    .then(user => {
      return user;
    });

  yield put({ type: ADD_USER_ASYNC, payload: apiResult });
}

function* editUserAsync(action) {
  console.log("inside saga edit");
  const apiResult = yield fetch(
    "https://localhost:44384/api/users/" + action.payload.ID,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(action.payload)
    }
  )
    .then(res => res.json())
    .then(usr => {
      return usr;
    });

  yield put({ type: EDIT_USER_ASYNC, payload: apiResult });
  const data = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: data });
}

function* deleteUserAsync(action) {
  const apiResult = yield fetch(
    "https://localhost:44384/api/users/" + action.payload,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }
  )
    .then(response => response.json())
    .then(users => {
      return users;
    });
  yield put({ type: DELETE_USER_ASYNC, payload: action.payload });
}
