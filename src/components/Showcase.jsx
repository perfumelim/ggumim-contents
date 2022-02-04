import React, { useState } from "react";
import useProductsQuery from "../hooks/useProductsQuery";
import MainSection from "./MainSection";
import SubImgBox from "./SubImgBox";
import Tooltip from "./Tooltip";

function Showcase() {
  const { products, isError, isLoading } = useProductsQuery();
  const [activeImage, setActiveImage] = useState(null);

  const onActiveImage = (id) => setActiveImage(id);

  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  const activeProduct = products?.productList?.find(
    (product) => product.productId === activeImage
  );

  return (
    <>
      <MainSection
        products={products}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        onClick={() => onActiveImage(null)}
      />
      <SubImgBox
        products={products}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        onClick={() => onActiveImage(null)}
      />
      {activeProduct && <Tooltip item={activeProduct} />}
    </>
  );
}

export default Showcase;
