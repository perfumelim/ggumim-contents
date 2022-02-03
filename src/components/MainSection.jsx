import React from "react";
import styled from "styled-components";

function MainImage({ products, setActiveImage }) {
  const { imageUrl, productList } = products;

  const handleClick = (e) => {
    setActiveImage(Number(e.target.id));
  };

  return (
    <MainImageBox>
      <Img src={imageUrl} alt="main-image" />
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
