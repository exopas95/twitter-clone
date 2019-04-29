import React, { Component } from "react";
import styled from "styled-components/native";
import { graphql } from "react-apollo";
import { ActivityIndicator, FlatList } from "react-native";

import ContentCard from "../components/ContentCards/ContentCard";

import GET_TWEETS_QUERY from "../graphql/queries/getTweets";

const Root = styled.View`
  flex: 1;
  padding-top: 5;
  background-color: #f2f2f2;
`;

class HomeScreen extends Component {
  _renderItem = ({ item }) => <ContentCard {...item} />;
  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      );
    }

    return (
      <Root>
        <FlatList
          contentContainerStyle={{ alignSelf: "stretch" }}
          data={data.getTweets}
          keyExtractor={item => item._id}
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

export default graphql(GET_TWEETS_QUERY)(HomeScreen);
