import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//components
import BritishNationalBibliographyNavigation from './BritishNationalBibliographyNavigation';
import GoogleBooksNavigation from './GoogleBooksNavigation';
import PenguinPublishing from '../screens/penguinPublishing/Index';
//types
import {BottomParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<BottomParamList>();

const BottomNavigation: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={'British National Bibliography'}>
      <Tab.Screen
        name="British National Bibliography"
        component={BritishNationalBibliographyNavigation}
      />
      <Tab.Screen name="Google Books" component={GoogleBooksNavigation} />
      <Tab.Screen name="Penguin Publishing" component={PenguinPublishing} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
