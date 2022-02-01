import { useState, useEffect } from "react";
import { getProducts } from "../utils/api";

export default function useProductsLoad() {
  const [products, setProducts] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
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
    products,
  };
}
