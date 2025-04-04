const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY",
});

const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

export const getRandomCat = () => {
  return fetch("https://api.thecatapi.com/v1/images/search", requestOptions)
    .then((response) => response.json())
    .then((cats) => cats[0]);
};
