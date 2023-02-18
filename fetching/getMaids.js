import axios from "axios";

export const getMaids = async () => {
  const options = {
    method: "GET",
    url: "/api/getMaids",
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios.request(options);

  return response.data.data;
};
