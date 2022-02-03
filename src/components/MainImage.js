import React from "react";
import styled from "styled-components";

function MainImage({ products, setActiveImage, activeImage }) {
  const { imageUrl, productList } = products;
  const handleClick = (e) => {
    setActiveImage(e.target.id);
  };

  console.log("??", activeImage);
  return (
    <MainImageBox>
      <Img src={imageUrl} alt="mainimage" />
      {productList.map((item) => (
        <Icon
          key={item.productId}
          id={item.productId}
          top={item.pointX * 1.6}
          left={item.pointY * 1.64}
          onClick={handleClick}
        >
          <Tooltip isActive={activeImage === item.productId ? true : false}>
            <img
              src="https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
              alt={item.productName}
            />
            <span>{item.productName}</span>
          </Tooltip>
          {/* {item.productName} */}
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

const Tooltip = styled.div`
display: inline-block;
color: deeppink;

span {
  display: ${(props) => (props.isActive ? "block" : "none")};
  position: absolute;
  max-width: 200px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  color: white;
  background: deeppink;
`;
