import * as React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
//components
import NewYorkTimesNavigation from './NewYorkTimesNavigation';
import GoogleBooksNavigation from './WolneLekturyNaviagtion';
import PenguinPublishingNavigation from './BibleNavigation';
import BottomTabBars from './BottomTabBars';
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
      <Tab.Screen name="Wolne lektury" component={GoogleBooksNavigation} />
      <Tab.Screen name="Bible" component={PenguinPublishingNavigation} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
