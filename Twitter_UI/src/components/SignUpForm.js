import React, { Component } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "@appandflow/touchable";
import { Platform, Keyboard } from "react-native";

import { colors } from "../utils/constants";

const Root = styled(Touchable).attrs({
  feedback: "none"
})`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const BackButton = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  z-index: 1;
  left: 5%;
`;

const ButtonConfirm = styled(Touchable).attrs({
  feedback: "opacity"
})`
  position: absolute;
  bottom: 15%;
  width: 70%;
  height: 50;
  background-color: ${props => props.theme.PRIMARY};
  border-radius: 10;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 5;
  shadow-offset: 0px 2px;
  elevation: 2;
`;

const ButtonConfirmText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-weight: bold;
  font-size: 20;
`;

const InputWrapper = styled.View`
  height: 50;
  width: 70%;
  border-bottom-width: 2;
  border-bottom-color: ${props => props.theme.SECONDARY};
  margin-vertical: 5;
  justify-content: flex-end;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.SECONDARY,
  selectionColor: colors.PRIMARY,
  autoCorrect: false
})`
  height: 30;
  color: ${props => props.theme.SECONDARY};
`;

class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: ""
  };

  _onOutsidePress = () => Keyboard.dismiss();

  _onChangeText = (text, type) => this.setState({ [type]: text });

  _checkIfDisabled() {
    const { firstName, lastName, email, password, username } = this.state;

    if (!firstName || !lastName || !email || !password || !username) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.SECONDARY} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input
              placeholder="First Name"
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, "firstName")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Last Name"
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, "lastName")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => this._onChangeText(text, "email")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={text => this._onChangeText(text, "password")}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => this._onChangeText(text, "username")}
            />
          </InputWrapper>
        </Wrapper>
        <ButtonConfirm disabled={this._checkIfDisabled()}>
          <ButtonConfirmText>Sign Up</ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default SignupForm;
