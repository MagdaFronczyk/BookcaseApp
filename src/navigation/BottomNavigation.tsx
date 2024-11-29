import * as React from 'react';

//components
import BritishNationalBibliographyNavigation from './britishNationalBibliographyNavigation';
import GoogleBooksNavigation from './googleBooksNavigation';
import PenguinPublishing from '../screens/penguinPublishing/Index';
import Poetry from '../screens/poetry/Index';
import WolneLektury from '../screens/wolneLektury/Index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
