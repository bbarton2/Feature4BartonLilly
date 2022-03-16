import Parse from "parse";

export const getByServiceId = (id) => {
  const special = Parse.Object.extend("Special");
  const query = new Parse.Query(special);
  return query.get(id).then((result) => {
    return result;
  });
};

export const getSpecialsByRestaurant = (restaurantObj) => {
  const Special = Parse.Object.extend("Special");
  const query = new Parse.Query(Special);
  return query.include("restaurant").equalTo("restaurant", restaurantObj).find().then((results) => {
    // returns array of Restaurant objects
    return results;
  });
};
