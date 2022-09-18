import axios from "axios";

const baseUrl = "https://api.reddit.com";

const getAll = async (index, lastPost) => {
  const response = await axios.get(
    `${baseUrl}/${index}/?limit=10&after=${lastPost}`
  );
  return response.data;
};

const search = async (search, lastPost) => {
  const response = await axios.get(
    `${baseUrl}/search?q=${search}&include_over_18=1&limit=10&after=${lastPost}`
  );
  return response.data;
};

const searchRepo = async (index, lastPost) => {
  const response = await axios.get(`${baseUrl}/r/${index}?limit=10&after=${lastPost}`);
  return response.data;
};

export { getAll, search, searchRepo };
