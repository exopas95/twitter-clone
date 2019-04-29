import React from "react";
import styled from "styled-components/native";

import ContentCardHeader from "./ContentCardHeader";
import ContentCardBottom from "./ContentCardBottom";

const Root = styled.View`
  min-height: 180;
  background-color: ${props => props.theme.WHITE};
  width: 100%;
  padding: 7px;
  shadow-color: ${props => props.theme.SECONDARY};
  shadow-offset: 0px 2px;
  shadow-radius: 2;
  shadow-opacity: 0.1;
  margin-vertical: 5;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 0px;
`;

const ContentText = styled.Text`
  font-size: 14;
  text-align: left;
  font-weight: 500;
  color: ${props => props.theme.SECONDARY};
`;

function ContentCard({ text, user, createdAt, favoriteCount }) {
  return (
    <Root>
      <ContentCardHeader {...user} createdAt={createdAt} />
      <ContentContainer>
        <ContentText>{text}</ContentText>
      </ContentContainer>
      <ContentCardBottom favoriteCount={favoriteCount} />
    </Root>
  );
}

export default ContentCard;
