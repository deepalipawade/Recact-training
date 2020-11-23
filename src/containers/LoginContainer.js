import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent"
import * as yup from 'yup'; // for everything

//useState hook that return a variable and method to modify veriable
const LoginContainer = () => {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")

    // const logValues = () => {
    //     console.log("Logvalues => Username : ", username, ", Password : ", password)
    // }

    let schema = yup.object().shape({
        username: yup.string().email(),
        password: yup.string().min(6),
    });

    const validateData = () => {
        schema.validate({ username: username, password: password }).catch(function (err) {
            console.log(err.name);
            console.log(err.errors);
        });          
    } 

    return(
        <LoginComponent username={username} password={password} setUsername={setUsername} setPassword={setPassword} validateData={validateData}/>
    )
}   

export default LoginContainer