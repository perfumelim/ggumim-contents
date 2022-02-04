import React from "react";
import styled, { css } from "styled-components";

function Tooltip({ item }) {
  if (!item) return null;
  const isTop = item.pointX * 1.6 > 500;
  const isRight = item.pointY * 1.4 >= 560;
  const top = isTop ? item.pointX * 1.6 - 130 : item.pointX * 1.6;
  const left = isRight ? item.pointY * 1.4 - 60 : item.pointY * 1.4;

  return (
    <Container
      key={item.productId}
      top={top}
      left={left}
      isTop={isTop}
      isRight={isRight}
    >
      <ContentBox id={item.productId}>
        <img src={item.imageUrl} alt={item.productName} />
        <TextBox>
          <p>{item.productName}</p>
          <PriceBox>
            {item.outside === false ? (
              <Sale>{item.discountRate}%</Sale>
            ) : (
              <span>예상가</span>
            )}
            {item.priceDiscount}
          </PriceBox>
        </TextBox>
        <MoreIcon>
          <img
            alt="상품보기"
            src="https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
          />
        </MoreIcon>
      </ContentBox>
    </Container>
  );
}

export default Tooltip;

const Container = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  margin-top: 16px;

  &: after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
    bottom: 86px;
    left: 40px;
    ${({ isRight }) =>
      isRight &&
      css`
        left: 170px;
      `}

    ${({ isTop }) =>
      isTop &&
      css`
      border-color: #ffffff transparent transparent transparent;
      bottom: -14px;
}`}
`;

const ContentBox = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 26px;
  border-radius: 7px;

  img {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    margin-right: 4px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4px;

  p {
    font-size: 14px;
  }
`;

const PriceBox = styled.div`
  display: flex;
  line-height: 1.2em;
  font-weight: 600;

  span {
    color: #898f94;
    font-size: 11px;
    margin-right: 4px;
  }
`;

const Sale = styled.p`
  color: #ff585d;
  margin-right: 4px;
  font-weight: 600;
  line-height: 1.2em;
`;

const MoreIcon = styled.div`
  margin-top: auto;
  img {
    width: 20px;
    height: 20px;
  }
`;
