import React from "react";
import styled from "styled-components/native";

import ContentCardHeader from "./ContentCardHeader";
import ContentCardBottom from "./ContentCardBottom";

const Root = styled.View`
  min-height: 180;
  background-color: ${props => props.theme.WHITE};
  width: 100%;
  shadow-color: ${props => props.theme.SECONDARY};
  shadow-offset: 0px 2px;
  shadow-radius: 2;
  shadow-opacity: 0.1;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 5px;
`;

const ContentText = styled.Text`
  font-size: 14;
  text-align: left;
  font-weight: 500;
  color: ${props => props.theme.SECONDARY};
`;

const text = "Eum Se Woong COOOOOOL";

function ContentCard() {
  return (
    <Root>
      <ContentCardHeader />
      <ContentContainer>
        <ContentText>{text}</ContentText>
      </ContentContainer>
      <ContentCardBottom />
    </Root>
  );
}

export default ContentCard;
