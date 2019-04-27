import React from "react";
import styled from "styled-components/native";

const Root = styled.View`
  height: 50;
  flex-direction: row;
  align-items: center;
  background-color: purple;
`;

const Avatar = styled.View`
  flex 1;
  background-color: red;
  align-self: stretch
`;

const Container = styled.View`
  flex 1;
  background-color: blue;
  align-self: stretch
`;

function ContentCardHeader() {
  return (
    <Root>
      <Avatar />
      <Container />
    </Root>
  );
}

export default ContentCardHeader;
