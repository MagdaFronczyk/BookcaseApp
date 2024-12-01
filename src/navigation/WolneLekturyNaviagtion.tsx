import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllWolneLektury from '../screens/wolneLektury/all/Index';
import FavWolneLektury from '../screens/wolneLektury/favourite/Index';
//types
import {
  WolneLekturyNavigationStackParamList,
  WolneLekturyTabParamList,
} from '../types/navigation';
import TopTabBars from './TopTabBars';

const Tab = createMaterialTopTabNavigator<WolneLekturyTabParamList>();
const Stack =
  createNativeStackNavigator<WolneLekturyNavigationStackParamList>();

const WolneLekturyTopTabNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllWolneLektury"
        component={AllWolneLektury}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="FavoriteWolneLektury"
        component={FavWolneLektury}
        options={{title: 'Favourite'}}
      />
    </Tab.Navigator>
  );
};

const WolneLekturyNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WolneLekturyNavigation"
        component={WolneLekturyTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default WolneLekturyTopTabNavigation;
