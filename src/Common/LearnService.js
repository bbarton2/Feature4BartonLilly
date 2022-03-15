import Parse from "parse";

export const getById = (id) => {
  const vehicle = Parse.Object.extend("B4aVehicle");
  const query = new Parse.Query(vehicle);
  return query.get(id).then((result) => {
    return result;
  });
};
