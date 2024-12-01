import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllPenguin from '../screens/penguinPublishing/all/Index';
import FavPenguin from '../screens/penguinPublishing/favourite/Index';
import TopTabBars from './TopTabBars';

//types
import {
  PenguinPublishingNavigationStackParamList,
  PenguinPublishingTabParamList,
} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<PenguinPublishingTabParamList>();
const Stack =
  createNativeStackNavigator<PenguinPublishingNavigationStackParamList>();
const PenguinPublishingTopTabNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllPenguin"
        component={AllPenguin}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="FavoritePenguin"
        component={FavPenguin}
        options={{title: 'Favourite'}}
      />
    </Tab.Navigator>
  );
};

const PenguinPublishingNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PenguinPublishingNavigation"
        component={PenguinPublishingTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PenguinPublishingNavigation;
