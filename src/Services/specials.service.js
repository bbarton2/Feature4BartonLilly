import Parse from "parse";
//gets the specials by the id
export const getBySpecialId = (id) => {
  const special = Parse.Object.extend("Special");
  const query = new Parse.Query(special);
  return query.get(id).then((result) => {
    return result;
  });
};

//organizes all specials by the assocated restaurant
export const getSpecialsByRestaurant = (restaurantObj) => {
  const Special = Parse.Object.extend("Special");
  const query = new Parse.Query(Special);
  return query.include("restaurant").equalTo("restaurant", restaurantObj).find().then((results) => {
    // returns array of Restaurant objects
    return results;
  });
};
