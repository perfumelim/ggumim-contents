import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `https://cdn.ggumim.co.kr/test/image_product_link.json`
  );
  return response.data;
};
