import { useState, useEffect } from "react";
import { getProductList } from "../utils/api";

export default function useExchangeRateLoad() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { productList } = await getProductList();
      setData(productList);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
}
