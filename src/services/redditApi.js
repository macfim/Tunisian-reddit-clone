import axios from "axios";

const BASE_URL = "https://api.reddit.com";
const PARAMS = "include_over_18=1&limit=10";

const fetchPosts = async (categorie) => {
  const response = await axios.get(`${BASE_URL}/${categorie}?${PARAMS}`);
  return response.data.data.children;
};

const fetchMorePosts = async (categorie, lastPost) => {
  const response = await axios.get(
    `${BASE_URL}/${categorie}?${PARAMS}&after=${lastPost}`
  );
  return response.data.data.children;
};

const fetchRepoPosts = async (repo) => {
  const response = await axios.get(`${BASE_URL}/r/${repo}?${PARAMS}`);
  return response.data.data.children;
};

const fetchMoreRepoPosts = async (repo, lastPost) => {
  const response = await axios.get(
    `${BASE_URL}/r/${repo}?${PARAMS}&after=${lastPost}`
  );
  return response.data.data.children;
};

const searchPosts = async (searchInput) => {
  const response = await axios.get(
    `${BASE_URL}/search?q=${searchInput}&${PARAMS}`
  );
  return response.data.data.children;
};

const searchMorePosts = async (searchInput, lastPost) => {
  const response = await axios.get(
    `${BASE_URL}/search?q=${searchInput}&${PARAMS}&after=${lastPost}`
  );
  return response.data.data.children;
};

const redditApi = {
  fetchPosts,
  fetchRepoPosts,
  searchPosts,
  fetchMorePosts,
  fetchMoreRepoPosts,
  searchMorePosts,
};
export default redditApi;
