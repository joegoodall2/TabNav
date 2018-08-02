/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, createMaterialTopTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import CommunityMembersView from './Community/CommunityMembersView';
import GroupsView from './Community/GroupsView';
import MyGroupsView from './Community/MyGroupsView';
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

const CommunityTabRouter = createMaterialTopTabNavigator(
  {
    Members: { screen: CommunityMembersView },
    Groups: { screen: GroupsView },
    'My Groups': { screen: MyGroupsView }
  }
);

export default TabNavigator({
  Home: { screen: App },
  Community: { screen: CommunityTabRouter },
});
