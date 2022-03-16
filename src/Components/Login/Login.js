import React from "react";
import Header from "../Header/Header"
import { Link } from "react-router-dom"


function Login({ title }) {


    return (
        <div>
        <Header> </Header> 

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

export default Login;