import axios from "axios";

const baseUrl = "https://api.reddit.com/r/Tunisia";

const getAll = async (index, lastPost) => {
  const response = await axios.get(`${baseUrl}/${index}/?limit=10&after=${lastPost}`);
  return response.data;
};

export { getAll };
