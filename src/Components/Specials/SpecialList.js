import React, { useEffect, useState } from "react";
import { getAllRestaurant, getById } from "../../Services/restaurant.service";
import { getByServiceId, getSpecialsByRestaurant } from "../../Services/specials.service";

/* STATEFUL PARENT COMPONENT */
const SpecialList = () => {
  // Variables in the state to hold data
  const [specials, setSpecials] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  


  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllRestaurant().then((restaurants) => {
         console.log(restaurants);
         setRestaurants(restaurants);   

         const specialsPromises = restaurants.map((restaurant) => {
            return getSpecialsByRestaurant(restaurant) 
         })

         //this is ensurning that all specials for each restaruatnt
         // will be in corresponing arrays
          Promise.all(specialsPromises).then((specialsResult) => {
            console.log('specials result',specialsResult)
            setSpecials(specialsResult)
          })
    });
    
},[]);

  return (
    <div>
        {/* checks to see if there are restuarnats that exist  */}
        {/* we want to clean up the CSS and make the list look nicer in a future feature */}
        {restaurants.length > 0 && (
          <ul>
            {restaurants.map((restaurant, i) => (
              <div>
                <span>
                  <div className="restaurant-name specials" key={restaurant.id}>{restaurant.get("name")}</div>{" "}
                    <br />
                    {/* checks to see if there are specials that exist  */}
                    {/* generates a list of specials to be used on the home and specials component */}
                    {specials.length > 0 && (
                      <ul>
                        {specials[i].map((special) => (
                          <div>
                            <span>
                              <div className="specials" key={special.id}>{special.get("item")}{" "}{special.get("price")}</div>{" "}
                            </span>
                          </div>
                        )) }
                      </ul>
                    )}
                </span>
                <br/>
              </div>
            ))}
          </ul>
        )}
      </div>
    
  );
};

export default SpecialList;
