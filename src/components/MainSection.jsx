import React from "react";
import styled from "styled-components";

function MainImage({ products, setActiveImage, activeImage }) {
  const { imageUrl, productList } = products;

  const handleClick = (id) => {
    setActiveImage(id);
  };

  const handleClose = () => {
    setActiveImage(null);
  };

  return (
    <MainImageBox>
      <Img src={imageUrl} alt="main-image" />
      {productList.map((item) => (
        <IconBox
          key={item.productId}
          top={item.pointX * 1.6}
          left={item.pointY * 1.64}
          onClick={() => {
            if (item.productId === activeImage) {
              handleClose();
            } else {
              handleClick(item.productId);
            }
          }}
        >
          {item.productId === activeImage ? (
            <img
              id={item.productId}
              src="https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
              alt={item.productName}
            />
          ) : (
            <img
              id={item.productId}
              src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
              alt={item.productName}
            />
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

const IconBox = styled.button`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 32px;
  height: 32px;
  border: none;
  background: inherit;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }

  cursor: pointer;
`;
