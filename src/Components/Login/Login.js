import React from "react";
import HeaderModule from "../Header/Header"
import { Link } from "react-router-dom"


function LoginModule({ title }) {

    return (
        <div>
        <HeaderModule /> 

         <p> In login </p>
        
            <form>
                <p>
                User Name:
                <input type="text" name="first" size="12" />
                </p>
                <p>
                Password:
                <input type="password" id = "password" name="last" size="12" />
                </p>
                
                <p>
                Not Registered? Click <Link to="/subscribe" className="nav-link">Here </Link>
                </p>
                <button type="submit">Submit</button>
            </form>
           
        </div> 
    );
}

export default LoginModule;