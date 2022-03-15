import Parse from "parse";

export const getById = (id) => {
  const reestaurant = Parse.Object.extend("Restaurant");
  const query = new Parse.Query(reestaurant);
  return query.get(id).then((result) => {
    return result;
  });
};
