import React, { Component } from "react";
import styled from "styled-components/native";
import Touchable from "@appandflow/touchable";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../utils/constants";

import SignUpForm from "../components/SignUpForm";

const ICON_SIZE = 70;

const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.WHITE};
  position: relative;
`;

const TwitterContainer = styled.View`
  flex: 0.2;
  top: 150;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: ${props => props.theme.WHITE};
`;

const ButtonSignUpTextContainer = styled.View`
  position: absolute;
  bottom: 100;
  left: 0;
  right: 0;
  height: 100;
  justify-content: center;
  align-items: center;
`;

const ButtonSignUp = styled(Touchable).attrs({
  feedback: "opacity"
})`
  height: 50;
  width: 70%;
  background-color: ${props => props.theme.PRIMARY};
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 5px;
`;

const ButtonSignUpText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-weight: bold;
  font-size: 20;
`;

const ButtonLoginTextContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonLogin = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  justify-content: center;
  align-items: center;
`;

const ButtonLoginText = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 16;
`;

const initialState = {
  showSignup: false,
  showLogin: false
};

class LoginScreen extends Component {
  state = initialState;

  _onShowSignupPress = () => this.setState({ showSignup: true });

  _onBackPress = () => this.setState({ ...initialState });
  render() {
    if (this.state.showSignup) {
      return (
        <Root>
          <SignUpForm onBackPress={this._onBackPress} />
        </Root>
      );
    }
    return (
      <Root>
        <TwitterContainer>
          <Entypo name="twitter" size={ICON_SIZE} color={colors.PRIMARY} />
        </TwitterContainer>
        <ButtonSignUpTextContainer>
          <ButtonSignUp onPress={this._onShowSignupPress}>
            <ButtonSignUpText>Sign Up</ButtonSignUpText>
          </ButtonSignUp>
        </ButtonSignUpTextContainer>
        <ButtonLoginTextContainer>
          <ButtonLogin>
            <ButtonLoginText>Already have an account?</ButtonLoginText>
          </ButtonLogin>
        </ButtonLoginTextContainer>
      </Root>
    );
  }
}

export default LoginScreen;
