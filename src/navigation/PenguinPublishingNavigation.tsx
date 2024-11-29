import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//components
import AllPenguin from '../screens/penguinPublishing/all/Index';
import FavPenguin from '../screens/penguinPublishing/favourite/Index';
//types
import {
  PenguinPublishingNavigationStackParamList,
  PenguinPublishingTabParamList,
} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<PenguinPublishingTabParamList>();
const Stack =
  createNativeStackNavigator<PenguinPublishingNavigationStackParamList>();

const PenguinPublishingTopTabNavigation: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllPenguin"
        component={AllPenguin}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="FavoritePenguin"
        component={FavPenguin}
        options={{title: 'Favourite'}}
      />
    </Tab.Navigator>
  );
};

const PenguinPublishingNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PenguinPublishingNavigation"
        component={PenguinPublishingTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PenguinPublishingNavigation;
