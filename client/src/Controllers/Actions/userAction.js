import { CREATE_USER, GET_USER_LIST, UPDATE_USERS } from "../../constants";
import axios from 'axios'
const token = localStorage.getItem("token")

export const createUserAction = (user) => {
    return async function (dispatch) {
        try {
            const data = (await axios.post(`/users/signup`, user, {headers:{"Authorization":`Bearer ${token}`}})).data;
            return dispatch({
                type: CREATE_USER,
                payload: data.data
            })
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error.response.data.error
            }
            )
        }
    }
}


export const editUserAction = (user, userId)=>{
    return async function (dispatch){
        try {
            const sendInfo = (await axios.put(`/users/update/${userId}`, user, {headers:{"Authorization":`Bearer ${token}`}})).data;
            console.log(sendInfo)
            return dispatch({
                type:UPDATE_USERS,
                payload:sendInfo.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const changePassword = (user, userId)=>{
    return async function (dispatch){
        try {
            const sendInfo = (await axios.put(`/users/changePassword/${userId}`, user, {headers:{"Authorization":`Bearer ${token}`}})).data;
            console.log(sendInfo)
            return dispatch({
                type:UPDATE_USERS,
                payload:sendInfo
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// export function getUserAction(){
//     return async function(dispatch){
//         const data = await getUsers();
//         return dispatch({
//             type:GET_USERS,
//             payload:data
//         })
//     }
// }

export const getUserList = () => {
    return function (dispatch) {

        axios.get(`/users`, {headers:{"Authorization":`Bearer ${token}`}})
            .catch(error => console.log("Action creator getUserList:", error))
            .then(response => {
                dispatch({
                    type: GET_USER_LIST,
                    payload: response.data
                });
            });
    }
}