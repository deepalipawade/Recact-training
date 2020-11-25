import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent"
import apiHelper from "../apis/apiHelper";
import { API_HOST_URL } from '../shared/appConstant'
import loginReducer, { initialState , schema} from '../reducers/loginReducer'
import ProductList from '../components/productList';

//useState hook that return a variable and method to modify veriable
const LoginContainer = () => {
    const [ state, dispatch ] = useReducer(loginReducer, initialState);
    const { username, password, userDetails } = state
   
    let auth_token = false

    const validateData = () => {
        schema.validate({ username, password}, {abortEarly: false})
        .then(() => {
            apiHelper('post', API_HOST_URL, {
                username, 
                password, 
                type: 'normal'})
            .then((response) => {
                dispatch({type: 'SET_USER_DETAILS', userDetails : userDetails})
                //success change state isLoggedIn as true
                console.log("response : ", response, "....userDetails : ", userDetails);
                console.log("apiapiapiaurl", API_HOST_URL);
            })
        })
        .catch((err) => {
            err.inner.forEach((ele) => {
                if (ele.path === 'username') {
                    dispatch({type: 'setUsernameError', usernameError: ele.message})
                } 
                if (ele.path === 'password') {
                    dispatch({type: 'setPasswordError', passwordError: ele.message})
                }
                console.log(err.errors);
                console.log(err.name); 
            });
        });          
    } 

// if (auth_token){
//     // redirect
//     console.log(
//         "auth"
//     );
//     return(<ProductList/>)
// }
    return (
            <LoginComponent state={state} dispatch={dispatch} validateData={validateData}/>
    )
  
}   

export default LoginContainer