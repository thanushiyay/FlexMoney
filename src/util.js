import axios from "axios";

const url = axios.create({
  baseURL: "https://api.publicapis.org/",
});

export const getApiSuggestions = async (query) => {
    let result = url
    .get(`/entries?title=${query}`)
    .then((response) => {
            return response.data
    })
    .catch((error) => {
      return error;
    });

  return result;
};

