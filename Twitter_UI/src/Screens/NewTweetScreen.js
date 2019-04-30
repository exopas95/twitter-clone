import React, { Component } from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";
import HeaderAvatar from "../components/HeaderAvatar";

const Root = styled.View`
  background-color: ${props => props.theme.WHITE};
  flex: 1;
  align-items: center;
`;

const Wrapper = styled.View`
  height: 80%;
  width: 90%;
  padding-top: 5;
  position: relative;
`;

const Input = styled.TextInput.attrs({
  multiline: true,
  placeholder: "What's happening?",
  maxLength: 200,
  autoFocus: true
})`
  width: 100%;
  font-size: 18;
  color: ${props => props.theme.SECONDARY};
`;

export const TweetButton = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 }
})`
  background-color: ${props => props.theme.PRIMARY};
  justify-content: center;
  align-items: center;
  width: 80;
  height: 35;
  border-radius: 20;
  margin-right: 10;
`;

export const TweetButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-size: 16;
`;

class NewTweetScreen extends Component {
  state = {
    text: ""
  };

  _onChangeText = text => this.setState({ text });

  render() {
    return (
      <Root>
        <Wrapper>
          <Input value={this.state.text} onChangeText={this._onChangeText} />
        </Wrapper>
      </Root>
    );
  }
}

export default NewTweetScreen;
