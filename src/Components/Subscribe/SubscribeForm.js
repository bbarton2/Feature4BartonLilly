import React from "react";


const SubscribeFormModule = () => {
    // in the future, we want to improve the CSS for this module
    return (
      <div>
        <form>
        <p>
          First Name:
          <input type="text" name="first" size="12" />
        </p>
        <p>
          Last Name:
          <input type="text" name="last" size="12" />
        </p>
        <p>
          Email:
          <input type="email" name="email" size="12" />
        </p>
        <p>
          Phone Number:
          <input type="Phone" name="phonenumber" size="12" />
        </p>
        <p>
          Enter Password:
          <input type="password" name="password" id="password" size="12" />
        </p>
        <p>
          Re-enter Password:
          <input type="password" name="password" size="12" />
        </p>
        <input type="checkbox" name="subscription" size="10" /> Sign up for
        promotional emails
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
  
  export default SubscribeFormModule;