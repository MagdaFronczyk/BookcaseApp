import * as React from 'react';

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
  ProjectGutenbergTabParamList,
} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<ProjectGutenbergTabParamList>();

const ProjectGutenbergNavigation: React.FC = (): JSX.Element => {
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

export default ProjectGutenbergNavigation;
