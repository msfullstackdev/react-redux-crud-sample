import axios from "axios";

export const fetchUsers = () => {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },

    url: "https://localhost:44383/api/users"
  });
};
