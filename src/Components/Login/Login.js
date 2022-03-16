import React from "react";
import HeaderModule from "../Header/Header"
import LoginFormModule from "./LoginForm";
import { Link } from "react-router-dom"


function LoginModule({ title }) {

    return (
        <div>
        <HeaderModule /> 
        <LoginFormModule />
           
        </div> 
    );
}

export default LoginModule;