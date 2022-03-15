export const getById = (id) => {
  const user = Parse.Object.extend("User");
  const query = new Parse.Query(user);
  return query.get(id).then((result) => {
    return result;
  });
};
