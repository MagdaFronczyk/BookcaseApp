import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
//components
import AllProjectGutenberg from '../screens/projectGutenberg/all/Index';
import FavProjectGutenberg from '../screens/projectGutenberg/favourite/Index';
import TopTabBars from './TopTabBars';

//types
import {
  ProjectGutenbergNavigationStackParamList,
  ProjectGutenbergTabParamList,
} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<ProjectGutenbergTabParamList>();
const Stack =
  createNativeStackNavigator<ProjectGutenbergNavigationStackParamList>();

const ProjectGutenbergTopTabNavigation: React.FC = (): JSX.Element => {
  const renderTopBarComponent = (
    props: MaterialTopTabBarProps,
  ): JSX.Element => {
    return <TopTabBars {...props} />;
  };
  return (
    <Tab.Navigator
      tabBar={(props: MaterialTopTabBarProps) => renderTopBarComponent(props)}>
      <Tab.Screen
        name="AllProjectGutenberg"
        component={AllProjectGutenberg}
        options={{title: 'Wszystkie'}}
      />
      <Tab.Screen
        name="FavoriteProjectGutenberg"
        component={FavProjectGutenberg}
        options={{title: 'Ulubione'}}
      />
    </Tab.Navigator>
  );
};

const ProjectGutenbergNavigation: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectGutenbergNavigation"
        component={ProjectGutenbergTopTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProjectGutenbergNavigation;
