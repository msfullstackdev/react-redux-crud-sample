import {FETCH_USERS,ADD_USER, EDIT_USER, DELETE_USER, EDIT_MODE, FETCH_USER_BY_ID,ADD_USER_BUTTON_CLICKED} from './actionTypes';



export const fetchUsers = ()=>({
    type:FETCH_USERS
});

export const fetchUserById = (id) =>(
    {
        type:FETCH_USER_BY_ID,
        payload:id
    }
)


export const addUser = (user)=>
(
    {
        type:ADD_USER,
        payload:user
    }
)

export const editUser = (user) =>
(
    {
    
    type:EDIT_USER,
    payload:user

})

export const deleteUser = (userId) =>
(
    {
        type:DELETE_USER,
        payload:userId
    }
)

export const editMode = () =>
(
    {
        type:EDIT_MODE
    }
)

export const addUserBtnClicked = () =>
(
    {
        type:ADD_USER_BUTTON_CLICKED
    }
)