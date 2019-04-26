import React from "react";
import styled from "styled-components/native";

import ContentCardHeader from "./ContentCardHeader";
import ContentCardBottom from "./ContentCardBottom";

const Root = styled.View`
  min-height: 180;
  background-color: red;
  width: 100%;
  shadow-color: ${props => props.theme.SECONDARY};
  shadow-offset: 0px 2px;
  shadow-radius: 2;
  shadow-opacity: 0.1;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: blue;
`;

function ContentCard() {
  return (
    <Root>
      <ContentCardHeader />
      <ContentContainer />
      <ContentCardBottom />
    </Root>
  );
}

export default ContentCard;
