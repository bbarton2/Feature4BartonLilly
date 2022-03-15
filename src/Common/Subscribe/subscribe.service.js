export const getById = (id) => {
  const newsletter = Parse.Object.extend("Subscribe");
  const query = new Parse.Query(newsletter);
  return query.get(id).then((result) => {
    return result;
  });
};
