import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// users service with a single method
// requests array of users from a third-party api via axios

export function Specials({ menu }) {
  //how we will render the specials
  //renders the specials of the day from the file specials.json
  return html`
    <ul>
      <!-- The formatting of all of the information from the json file -->
      ${menu.map(
        //iterating through json data and displaying it
        (menu) =>
          html` <li key="${menu}" class="specials">
            <b class="restaurant-name"> ${menu.Name} </b>
            <br /><br />
            <div class="item left">${menu.Appetizers}</div>
            <div class="item right">${menu.AppPrice}</div>
            <br />
            <div class="item left">${menu.Entrees}</div>
            <div class="item right">${menu.EntreesPrice}</div>
            <br / >
            <div class="item left bottom">${menu.Desserts}</div>
            <div class="item right bottom">${menu.DessertsPrice}</div>
            <p class="under"></p>
          </li>`
      )}
    </ul>
    <!-- A form that will change in the future to another page but for the time being a place to make a reservation  -->
    <p>
      Make a Reservation:
    </p>
    <p>
      First and last name:
      <input type="text" name="names" id="password" size="12" />
    </p>
    <p>
      Email:
      <input type="email" name="email" size="12" />
    </p>
    <p>
      Phone Number:
      <input type="tel" name="phonenumber" size="12" />
    </p>
    <p>
      Number of People:
      <input type="text" name="partysize" size="12" />
    </p>
    <input type="checkbox" name="subscription" size="10" /> Sign up for
    promotional emails
    <br />
    <br />
    <!-- Submit Button -->
    <button type="submit">Submit</button>
  `;
}
