import { getProducts } from "../utils/api";
import { useQuery } from "react-query";

export default function useProductsQuery() {
  const { data, isLoading, isError } = useQuery("Products", () =>
    getProducts()
  );

  return {
    isLoading,
    isError,
    products: data,
  };
}
