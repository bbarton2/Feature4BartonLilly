import React from "react";
import HeaderModule from "../Header/Header"
import LoginFormModule from "./LoginForm";


function LoginModule({ title }) {

    return (
        // all we need to return are the HeaderModule and the LoginFormModule
        <div>
        <HeaderModule />  
        <LoginFormModule />
           
        </div> 
    );
}

export default LoginModule;