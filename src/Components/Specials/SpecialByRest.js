import React, { useEffect, useState } from "react";
import { getAllRestaurant, getById } from "../../Services/restaurant.service";
import { getByServiceId, getSpecialsByRestaurant } from "../../Services/specials.service";

/* STATEFUL PARENT COMPONENT */
const SpecialByRestModule = () => {
  // Variables in the state to hold data
  const [special, setSpecial] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  


  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllRestaurant().then((restaurant) => {
         console.log(restaurant);
         setRestaurant(restaurant);   

         return getSpecialsByRestaurant(restaurant[0]).then((result) =>{
            console.log('special result',result)
         })
    });
    
    
},[]);


  return (
    <div>
        {restaurant.length > 0 && (
          <ul>
            {restaurant.map((special) => (
              <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
                  {special.get("item")}, {special.get("price")}
                  {/* Button with inline click handler to obtain 
                  instance of lesson for remove state variable*/}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
    
  );
};

export default SpecialByRestModule;
