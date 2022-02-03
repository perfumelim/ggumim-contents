import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";

function MainImage({ products, setActiveImage, activeImage }) {
  const { imageUrl, productList } = products;

  const handleClick = (e) => {
    setActiveImage(e.target.id);
  };

  console.log("선택된 이미지는 ?", activeImage);

  return (
    <MainImageBox>
      <Img src={imageUrl} alt="mainimage" />
      {productList.map((item) => (
        <IconBox
          key={item.productId}
          top={item.pointX * 1.6}
          left={item.pointY * 1.64}
        >
          <img
            id={item.productId}
            onClick={handleClick}
            src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
            alt={item.productName}
          />
          {activeImage === item.productId && (
            <Tooltip products={products}></Tooltip>
          )}
        </IconBox>
      ))}
    </MainImageBox>
  );
}

export default MainImage;

const MainImageBox = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 800px;
`;

const IconBox = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  img {
    width: 32px;
    height: 32px;
  }

  cursor: pointer;
`;
