import axios from "axios";

export async function apiCall(url, options = {}) {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch ({ message }) {
    console.log(message);
  }
}
