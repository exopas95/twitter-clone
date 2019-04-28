import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";
import { colors } from "../../utils/constants";

const ICON_SIZE = 20;

const Root = styled.View`
  height: 40;
  flex-direction: row;
`;

const Button = styled(Touchable).attrs({ feedback: "opacity" })`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-horizontal: 35px;
`;

const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const numFavorite = 3;
const isFavorite = true;

function ContentCardBottom() {
  return (
    <Root>
      <Button>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={ICON_SIZE}
          color={colors.LIGHT_GRAY}
        />
        <ButtonText>3</ButtonText>
      </Button>
      <Button>
        <Entypo name="retweet" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
        <ButtonText>3</ButtonText>
      </Button>
      <Button>
        <Entypo
          name="heart"
          size={ICON_SIZE}
          color={isFavorite ? "red" : colors.LIGHT_GRAY}
        />
        <ButtonText>3</ButtonText>
      </Button>
    </Root>
  );
}

export default ContentCardBottom;
