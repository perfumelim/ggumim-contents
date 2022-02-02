import React from "react";
import styled from "styled-components";

function MainImage({ products }) {
  const { imageUrl, productList } = products;

  return (
    <MainImageBox>
      <Img src={imageUrl} alt="mainimage" />
      {productList.map((item) => (
        <Icon
          key={item.productId}
          id={item.productId}
          top={item.pointX * 1.6}
          left={item.pointY * 1.6}
        >
          <img
            src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
            alt={item.productName}
          />
          {item.productName}
        </Icon>
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

const Icon = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  img {
    width: 32px;
    height: 32px;
  }
`;
