import React from "react";
import styled from "styled-components/native";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

import { fakeAvatar } from "../../utils/constants";

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-self: stretch;
`;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE}
  width: ${AVATAR_SIZE}
  border-radius: ${AVATAR_RADIUS};
`;

const MetaContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const MetaBottomContainer = styled.View`
  flex: 0.8;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;
`;

const MetaFullName = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${props => props.theme.SECONDARY};
`;

const MetaText = styled.Text`
  font-size: 14;
  font-weight: 600;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const createdAt = "1 day ago";

function ContentCardHeader({
  username,
  firstName,
  lastName,
  avatar,
  createdAt
}) {
  return (
    <Root>
      <AvatarContainer>
        <Avatar source={{ uri: avatar || fakeAvatar }} />
      </AvatarContainer>
      <MetaContainer>
        <MetaTopContainer>
          <MetaFullName>
            {firstName} {lastName}
          </MetaFullName>
          <MetaText style={{ marginLeft: 5 }}>@{username}</MetaText>
        </MetaTopContainer>
        <MetaBottomContainer>
          <MetaText>{distanceInWordsToNow(createdAt)} ago</MetaText>
        </MetaBottomContainer>
      </MetaContainer>
    </Root>
  );
}

export default ContentCardHeader;
