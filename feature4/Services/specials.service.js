export function getSpecials() {
  const axios = window.axios;
  return axios.get("specials.json").then((response) => {
    return response.data.restaurants;
  });
}
