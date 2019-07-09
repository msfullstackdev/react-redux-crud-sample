import {
  FETCH_USERS_ASYNC,
  EDIT_MODE,
  FETCH_USER_BY_ID,
  CLEAR_STATE,
  ADD_USER_ASYNC,
  EDIT_USER_ASYNC,
  DELETE_USER_ASYNC,
  FETCH_USERS_ASYNC_ERROR,
  EDITED,
  ADD_USER_BUTTON_CLICKED
} from "../actions/actionTypes";

const initialState = {
  users: [],
  user: {},
  editMode: false,
  error: false,
  isSaveBtnClicked: false,
  isEditBtnClicked: false,
  edit: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_ASYNC:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USERS_ASYNC_ERROR:
      return {
        ...state,
        error: true
      };
    case ADD_USER_ASYNC: {
    
      return {
        ...state,
        users: state.users.concat([action.payload]),
        edit: false
      };
    }
    case DELETE_USER_ASYNC:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        edit: false
      };

    case EDIT_MODE:
      return {
        ...state,
        isEditBtnClicked: true
      };
    case FETCH_USER_BY_ID: {
      return {
        ...state,
        user: state.users.find(usr => usr.id === action.payload)
      };
    }
    case EDIT_USER_ASYNC:
      return {
        ...state,
        user: action.payload,
        isEditBtnClicked: false,
        edit: true
      };
    case EDITED:
      return {
        ...state,
        edit: true
      };
    case ADD_USER_BUTTON_CLICKED:
      return {
        ...state,
        edit: false
      };
    default:
      return state;
  }
}
