import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/elements';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import SingleProjectGutenberg from '../screens/projectGutenberg/single/Index';
import SingleNYTimes from '../screens/newYorkTimes/single/Index';
import SingleWolneLektury from '../screens/wolneLektury/single/Index';
import DrawerNavigation from './DrawerNavigation';
import Information from '../screens/information/Index';
import Contact from '../screens/contact/Index';
import Calendar from '../screens/calendar/Index';
import AuthModalSwitcher from '../screens/panel/account/authetntication/AuthModalSwitcher';
//types
import {RootStackParamList} from '../types/navigation';
import WebViewScreen from '../components/webView/WebViewScreen';
//styles
import {theme} from '../style/styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Index: React.FC = (): JSX.Element => {
  const appTheme = DefaultTheme;
  appTheme.colors.background = theme.backgroundColor.white;

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer theme={appTheme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerBackButtonDisplayMode: 'minimal',
            }}>
            <Stack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="WebViewScreen"
              component={WebViewScreen}
              options={{
                headerBackTitle: 'Back',
                headerTintColor: theme.color.black,
              }}
            />
            <Stack.Group
              screenOptions={({navigation}) => ({
                headerShown: true,
                presentation: 'containedModal',
                animation: 'fade',
                // eslint-disable-next-line react/no-unstable-nested-components
                headerLeft: props => (
                  <HeaderBackButton
                    {...props}
                    onPress={() => navigation.goBack()}
                    label=""
                    allowFontScaling={true}
                    pressColor="black"
                    style={{}}
                  />
                ),
              })}>
              <Stack.Screen
                name="AuthenticationModals"
                component={AuthModalSwitcher}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                headerBackTitle: '',
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
              <Stack.Screen name="Informacje" component={Information} />
              <Stack.Screen name="Kontakt" component={Contact} />
              <Stack.Screen name="Kalendarz" component={Calendar} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Index;
