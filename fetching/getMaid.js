import axios from "axios";

export const getMaid = async ({ queryKey }) => {
  const [_, maidId] = queryKey;

  const options = {
    method: "POST",
    url: "/api/getMaidById",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: { id: maidId },
  };

  const response = await axios.request(options);
  return response.data.data;
};
