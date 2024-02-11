import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    domains: "techcrunch.com,thenextweb.com",
    apiKey: "2409228b10c74b31adb6341d5bfed2ee",
  },
});

export default newsApi;
