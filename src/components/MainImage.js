import React from "react";
import styled from "styled-components";

function MainImage({ products }) {
  const { imageUrl, productList } = products;

  return (
    <MainImageBox>
      <Img src={imageUrl} alt="mainimage" />
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
