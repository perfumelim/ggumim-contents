import React, { useState } from "react";
import useProductsQuery from "../hooks/useProductsQuery";
import MainImage from "./MainImage";
import SubImgBox from "./SubImgBox";

function Showcase() {
  const { products, isError, isLoading } = useProductsQuery();
  const [activeImage, setActiveImage] = useState(false);

  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  return (
    <div>
      <MainImage
        products={products}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
      <SubImgBox
        products={products}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}

export default Showcase;
