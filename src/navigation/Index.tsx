import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import BottomNavigation from './BottomNavigation';
import SingleProjectGutenberg from '../screens/projectGutenberg/single/Index';
import SingleNYTimes from '../screens/newYorkTimes/single/Index';
import SingleWolneLektury from '../screens/wolneLektury/single/Index';
//types
import {RootStackParamList} from '../types/navigation';
import WebViewScreen from '../components/webView/WebViewScreen';
import {theme} from '../style/styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Index: React.FC = (): JSX.Element => {
  const appTheme = DefaultTheme;
  appTheme.colors.background = theme.backgroundColor.white;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer theme={appTheme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
            <Stack.Group
              screenOptions={{
                headerTitle: '',
                headerBackTitle: 'Back',
                headerTintColor: theme.color.black,
              }}>
              <Stack.Screen
                name="SingleProjectGutenberg"
                component={SingleProjectGutenberg}
              />
              <Stack.Screen name="SingleNYTimes" component={SingleNYTimes} />
              <Stack.Screen
                name="SingleWolneLektury"
                component={SingleWolneLektury}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Index;
