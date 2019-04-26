import React, { Component } from "react";
import styled from "styled-components/native";

import ContentCard from "../components/ContentCards/ContentCard";

const Root = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
`;

//const T = styled.Text``;

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <ContentCard />
      </Root>
    );
  }
}

export default HomeScreen;
