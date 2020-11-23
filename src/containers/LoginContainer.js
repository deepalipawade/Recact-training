import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent"

//useState hook that return a variable and method to modify veriable
const LoginContainer = () => {
    const [ username , setUsername ] = useState("")
    const [ password , setPassword ] = useState("")

    const logValues = () => {
        console.log("Logvalues => Username : ", username, ", Password : ", password)
    }

    return(
        <LoginComponent username={username} password={password} setUsername={setUsername} setPassword={setPassword} logValues={logValues}/>
    )
}   

export default LoginContainer