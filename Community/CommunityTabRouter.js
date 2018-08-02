// @flow
import { createMaterialTopTabNavigator } from 'react-navigation';
import CommunityMembersView from './CommunityMembersView';
import GroupsView from './GroupsView';
import MyGroupsView from './MyGroupsView';

const CommunityTabRouter = createMaterialTopTabNavigator(
  {
    Members: { screen: CommunityMembersView },
    Groups: { screen: GroupsView },
    'My Groups': { screen: MyGroupsView }
  }
);

export default CommunityTabRouter
  
