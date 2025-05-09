import * as React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllWolneLektury from '../screens/wolneLektury/all/Index';
import FavWolneLektury from '../screens/wolneLektury/favourite/Index';
//types
import {WolneLekturyTabParamList} from '../types/navigation';
import TopTabBars from './TopTabBars';

const Tab = createMaterialTopTabNavigator<WolneLekturyTabParamList>();

const WolneLekturyNavigation: React.FC = (): JSX.Element => {
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
        options={{title: 'Wszystkie'}}
      />
      <Tab.Screen
        name="FavoriteWolneLektury"
        component={FavWolneLektury}
        options={{title: 'Ulubione'}}
      />
    </Tab.Navigator>
  );
};

export default WolneLekturyNavigation;
