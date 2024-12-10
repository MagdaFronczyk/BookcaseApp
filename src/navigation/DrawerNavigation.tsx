import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

//components
import BottomNavigation from './BottomNavigation';
import CustomDrawerContent from './CustomDrawerContent';
//types
import {DrawerNavigationParamList} from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerNavigationParamList>();

const DrawerNavigation: React.FC = (): JSX.Element => {
  const renderCustomDrawerContent = (
    props: DrawerContentComponentProps,
  ): JSX.Element => {
    return <CustomDrawerContent {...props} />;
  };

  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) =>
        renderCustomDrawerContent(props)
      }>
      <Drawer.Screen
        options={{headerShown: false}}
        name="BottomNavigation"
        component={BottomNavigation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
