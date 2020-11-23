import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent"
import * as yup from 'yup'; // for everything

//useState hook that return a variable and method to modify veriable
const LoginContainer = () => {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ usernameError, setUsernameError ] = useState(null)
    const [ passwordError, setPasswordError ] = useState(null)

    // const logValues = () => {
    //     console.log("Logvalues => Username : ", username, ", Password : ", password)
    // }

    let schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6).required(),
    });

    const validateData = () => {
        schema.validate({ username, password}, {abortEarly: false}).catch((err) => {
            err.inner.forEach((ele) => {
                if (ele.path === 'username') setUsernameError(ele.message)
                if (ele.path === 'password') setPasswordError(ele.message)
                console.log(err.errors);
                console.log(err.name); 
            });
        });          
    } 

    return(
        <LoginComponent 
        username={username} password={password} setUsername={setUsername} setPassword={setPassword} validateData={validateData} usernameError={usernameError} passwordError={passwordError}
        />
    )
}   

export default LoginContainer