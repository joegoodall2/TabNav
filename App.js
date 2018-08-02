/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import CommunityTabRouter from './Community/CommunityTabRouter'
type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: App },
  Community: { screen: CommunityTabRouter },
});
