import Parse from "parse";

export const getByServiceId = (id) => {
  const special = Parse.Object.extend("Special");
  const query = new Parse.Query(special);
  return query.get(id).then((result) => {
    return result;
  });
};
