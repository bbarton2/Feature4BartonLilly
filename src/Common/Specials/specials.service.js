export function getSpecials() {
  const axios = window.axios;
  return axios.get("specials.json").then((response) => {
    return response.data.restaurants;
  });
}

export const getById = (id) => {
  const spec = Parse.Object.extend("Specials");
  const query = new Parse.Query(spec);
  return query.get(id).then((result) => {
    return result;
  });
};
