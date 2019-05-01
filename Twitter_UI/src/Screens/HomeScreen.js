import React, { Component } from "react";
import styled from "styled-components/native";
import { graphql, compose, withApollo } from "react-apollo";
import { ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";

import ContentCard from "../components/ContentCards/ContentCard";

import { getUserInfo } from "../actions/user";

import GET_TWEETS_QUERY from "../graphql/queries/getTweets";
import ME_QUERY from "../graphql/queries/me";
import TWEET_ADDED_SUBSCRIPTION from "../graphql/subscriptions/tweetAdded";

const Root = styled.View`
  flex: 1;
  padding-top: 5;
  background-color: #f2f2f2;
`;

class HomeScreen extends Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: TWEET_ADDED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newTweet = subscriptionData.data.tweetAdded;

        if (!prev.getTweets.find(t => t._id === newTweet._id)) {
          return {
            ...prev,
            getTweets: [{ ...newTweet }, ...prev.getTweets]
          };
        }

        return prev;
      }
    });
  }

  componentDidMount() {
    this._getUserInfo();
  }

  _getUserInfo = async () => {
    const {
      data: { me }
    } = await this.props.client.query({ query: ME_QUERY });
    this.props.getUserInfo(me);
  };

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
          keyExtractor={item => item._id.toString()}
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

export default withApollo(
  compose(
    connect(
      undefined,
      { getUserInfo }
    ),
    graphql(GET_TWEETS_QUERY)
  )(HomeScreen)
);
