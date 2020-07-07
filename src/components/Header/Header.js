import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: darkorange;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Project Management Board</Title>
  </HeaderWrapper>
);

export default Header;
