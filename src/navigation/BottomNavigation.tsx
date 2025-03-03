import * as React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
//components
import NewYorkTimesNavigation from './NewYorkTimesNavigation';
import WolneLekturyNavigation from './WolneLekturyNaviagtion';
import ProjectGutenbergNavigation from './ProjectGutenbergNavigation';
import BottomTabBars from './BottomTabBars';
import Calendar from '../screens/calendar/Index';
//types
import {BottomTabParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation: React.FC = (): JSX.Element => {
  const renderBottomBarComponent = (props: BottomTabBarProps): JSX.Element => {
    return <BottomTabBars {...props} />;
  };

  return (
    <Tab.Navigator
      initialRouteName={'New York Times'}
      tabBar={(props: BottomTabBarProps) => renderBottomBarComponent(props)}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="New York Times" component={NewYorkTimesNavigation} />
      <Tab.Screen name="Wolne Lektury" component={WolneLekturyNavigation} />
      <Tab.Screen
        name="Project Gutenberg"
        component={ProjectGutenbergNavigation}
      />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
