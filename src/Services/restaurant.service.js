import Parse from "parse";
// query the restaurant by id
export const getById = (id) => {
  const restaurant = Parse.Object.extend("Restaurant");
  const query = new Parse.Query(restaurant);
  return query.get(id).then((result) => {
    return result;
  });
};
//gets all restaurants in database
export const getAllRestaurant = () => {
    const Restaurant = Parse.Object.extend("Restaurant");
    const query = new Parse.Query(Restaurant);
    return query.find().then((results) => {
      // returns array of Restaurant objects
      return results;
    });
  };