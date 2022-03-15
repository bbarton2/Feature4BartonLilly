export function getSpecials() {
  const axios = window.axios;
  return axios.get("specials.json").then((response) => {
    return response.data.restaurants;
  });
}

export const getById = (id) => {
  const vehicle = Parse.Object.extend("B4aVehicle");
  const query = new Parse.Query(vehicle);
  return query.get(id).then((result) => {
    return result;
  });
};
