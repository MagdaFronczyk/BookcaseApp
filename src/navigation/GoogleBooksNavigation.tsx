import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllGoogle from '../screens/googleBooks/all/Index';
import FavGoogle from '../screens/googleBooks/favourite/Index';
//types
import {
  GoogleBooksNavigationStackParamList,
  GoogleBooksTabParamList,
} from '../types/navigation';
import TopTabBars from './TopTabBars';

const Tab = createMaterialTopTabNavigator<GoogleBooksTabParamList>();
const Stack = createNativeStackNavigator<GoogleBooksNavigationStackParamList>();

const GoogleBooksTopTabNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllGoogle"
        component={AllGoogle}
        options={{title: 'All'}}
      />
      <Tab.Screen
        name="FavoriteGoogle"
        component={FavGoogle}
        options={{title: 'Favourite'}}
      />
    </Tab.Navigator>
  );
};

const GoogleBooksNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoogleBooksNavigation"
        component={GoogleBooksTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default GoogleBooksNavigation;
