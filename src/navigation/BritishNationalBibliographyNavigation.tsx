import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//components
import AllBritish from '../screens/britishNationalBibliography/all/Index';
import FavBritish from '../screens/britishNationalBibliography/favourite/Index';

//types
import {
  BritishNationalBibliographyNavigationStackParamList,
  BritishNationalBibliographyTabParamList,
} from '../types/navigation';

const Tab =
  createMaterialTopTabNavigator<BritishNationalBibliographyTabParamList>();
const Stack =
  createNativeStackNavigator<BritishNationalBibliographyNavigationStackParamList>();

const BritishNationalBibliographyTopTabNavigation: React.FC =
  (): JSX.Element => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="AllBritish"
          component={AllBritish}
          options={{title: 'All'}}
        />
        <Tab.Screen
          name="FavoriteBritish"
          component={FavBritish}
          options={{title: 'Favourite'}}
        />
      </Tab.Navigator>
    );
  };

const BritishNationalBibliographyNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BritishNationalBibliographyNavigation"
        component={BritishNationalBibliographyTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BritishNationalBibliographyNavigation;
