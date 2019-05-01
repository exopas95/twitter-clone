import React, { Component } from "react";
import styled from "styled-components/native";

const Root = styled.View``;

const T = styled.Text``;

class MessageScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <T>Message</T>
      </Root>
    );
  }
}

export default MessageScreen;
