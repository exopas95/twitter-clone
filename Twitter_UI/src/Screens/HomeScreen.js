import React, { Component } from "react";
import styled from "styled-components/native";
import { graphql } from "react-apollo";

import ContentCard from "../components/ContentCards/ContentCard";

import GET_TWEETS_QUERY from "../graphql/queries/getTweets";

const Root = styled.View`
  flex: 1;
  padding-top: 5;
  background-color: #f2f2f2;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <List>
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </List>
      </Root>
    );
  }
}

export default graphql(GET_TWEETS_QUERY)(HomeScreen);
