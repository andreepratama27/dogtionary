const API_URI = "https://dog.ceo/api";

interface IHttpClient {}

const httpClient = () => ({
  get: (uri: string) => {
    return fetch(API_URI + uri).then((response) => {
      if (!response.ok) {
        throw new Error("Something wrong");
      }

      return response.json();
    });
  },
});

export default httpClient;
