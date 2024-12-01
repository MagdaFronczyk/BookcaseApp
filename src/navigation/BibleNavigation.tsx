import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllPenguin from '../screens/bible/all/Index';
import FavPenguin from '../screens/bible/favourite/Index';
import TopTabBars from './TopTabBars';

//types
import {
  BibleNavigationStackParamList,
  BibleTabParamList,
} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<BibleTabParamList>();
const Stack = createNativeStackNavigator<BibleNavigationStackParamList>();

const BibleTopTabNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllBible"
        component={AllPenguin}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="FavoriteBible"
        component={FavPenguin}
        options={{title: 'Favourite'}}
      />
    </Tab.Navigator>
  );
};

const BibleNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BibleNavigation"
        component={BibleTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BibleNavigation;
