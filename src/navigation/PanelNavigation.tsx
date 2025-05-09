import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import User from '../screens/panel/Index';
import Lists from '../screens/panel/lists/Index';
import TopTabBars from './TopTabBars';

//types
import {PanelTabParamList} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<PanelTabParamList>();

const PanelNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen name="Account" component={User} options={{title: 'Konto'}} />
      <Tab.Screen name="Lists" component={Lists} options={{title: 'Listy'}} />
    </Tab.Navigator>
  );
};

export default PanelNavigation;
