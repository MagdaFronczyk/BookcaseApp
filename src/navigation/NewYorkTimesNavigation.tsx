import * as React from 'react';

import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllNYTimes from '../screens/newYorkTimes/all/Index';
import FavNYTimes from '../screens/newYorkTimes/favourite/Index';
import TopTabBars from './TopTabBars';
//types
import {NewYorkTimesNavigationTabParamList} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<NewYorkTimesNavigationTabParamList>();

const NYTimesNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllNYTimes"
        component={AllNYTimes}
        options={{title: 'Wszystkie'}}
      />
      <Tab.Screen
        name="FavoriteNYTimes"
        component={FavNYTimes}
        options={{title: 'Ulubione'}}
      />
    </Tab.Navigator>
  );
};

export default NYTimesNavigation;
