import * as React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
//components
import BritishNationalBibliographyNavigation from './BritishNationalBibliographyNavigation';
import GoogleBooksNavigation from './GoogleBooksNavigation';
import PenguinPublishingNavigation from './PenguinPublishingNavigation';
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
      initialRouteName={'British National Bibliography'}
      tabBar={(props: BottomTabBarProps) => renderBottomBarComponent(props)}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="British National Bibliography"
        component={BritishNationalBibliographyNavigation}
      />
      <Tab.Screen name="Google Books" component={GoogleBooksNavigation} />
      <Tab.Screen
        name="Penguin Publishing"
        component={PenguinPublishingNavigation}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
