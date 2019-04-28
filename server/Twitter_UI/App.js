import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UIManager } from "react-native";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { store, client } from "./src/store";
import { colors } from "./src/utils/constants";

import AppNavigation from "./src/navigations";

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
