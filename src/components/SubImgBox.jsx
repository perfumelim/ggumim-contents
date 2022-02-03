import React from "react";
import styled, { css } from "styled-components";

function SubImgBox({ products, setActiveImage, activeImage }) {
  const { productList } = products;

  const handleClick = (e) => {
    setActiveImage(Number(e.target.id));
  };
  return (
    <ImageBox>
      {productList.map((item) => (
        <Images key={item.productId} isActive={item.productId === activeImage}>
          <img
            src={item.imageUrl}
            alt={item.productName}
            id={item.productId}
            onClick={handleClick}
          />
        </Images>
      ))}
    </ImageBox>
  );
}

export default SubImgBox;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 10px;
  width: 800px;
`;

const Images = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
    `}
  height: 110px;
  margin: 26px 4px;
  padding: 2px;
  border-radius: 18px;

  img {
    width: 106px;
    height: 106px;
    border-radius: 16px;
    border: 0.5px solid #aaafb9;
  }
`;
