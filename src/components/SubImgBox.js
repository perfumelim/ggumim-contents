import React from "react";
import styled from "styled-components";

function SubImgBox({ products, setActiveImage, activeImage }) {
  const { productList } = products;

  const handleClick = (e) => {
    setActiveImage(e.target.id);
  };

  return (
    <ImageBox>
      {productList.map((item) => (
        <Images
          key={item.productId}
          id={item.productId}
          onClick={handleClick}
          isActive={activeImage === item.productId ? true : false}
        >
          <img src={item.imageUrl} alt={item.productName} />
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
  img {
    width: 106px;
    height: 106px;
    border-radius: 16px;
    border: 0.5px solid #aaafb9;
    margin: 28px 6px;
  }
`;
