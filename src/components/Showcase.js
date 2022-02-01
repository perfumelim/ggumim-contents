import React, { useEffect, useState } from "react";
import useProductsLoad from "../hooks/useProductsLoad";

function Showcase() {
  const { products, isError, isLoading } = useProductsLoad;
  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  console.log("image?", products.imageUrl);
  return (
    <div>
      <img alt="productImage" src={products.imageUrl} />
    </div>
  );
}

export default Showcase;
