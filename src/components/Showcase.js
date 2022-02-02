import React, { useEffect } from "react";
import useProductsLoad from "../hooks/useProductsLoad";
import MainImage from "./MainImage";
import SubImgBox from "./SubImgBox";

function Showcase() {
  const { products, isError, isLoading } = useProductsLoad();

  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  return (
    <div>
      <MainImage products={products} />
      <SubImgBox products={products} />
    </div>
  );
}

export default Showcase;
