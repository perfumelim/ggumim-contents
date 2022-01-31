import axios from "axios";
import { PRODUCT_LIST_API_URL } from "./constants";

export const getProductList = async () => {
  const response = await axios.get(PRODUCT_LIST_API_URL);

  return response.data;
};
