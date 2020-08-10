import axios from "axios";

// export const configureInterceptor = () => {};
// const baseToken = "716cdcf6-84d3-4aa0-8f3c-8c81f24621db";
//

export const getHeader = () => {
  return {
    "Content-Type": "multipart/form-data",
    "Accept" : "application/json",
  };
};

const getFullUrl = endpoint => {
  return "https://c1907306323c.ngrok.io/" + endpoint;
  // return "http://localhost:8083/" + endpoint;
};

const fetchApi = (method, endpoint, params, headers) =>
  axios({
    method,
    headers: headers || getHeader(),
    url: getFullUrl(endpoint),
    data: params
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));

export default fetchApi;
