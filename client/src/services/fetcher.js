import axios from "axios";

export const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
