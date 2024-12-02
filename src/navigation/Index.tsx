import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import BottomNavigation from './BottomNavigation';
import SingleBible from '../screens/bible/single/Index';
import SingleNYTimes from '../screens/newYorkTimes/single/Index';
import SingleWolneLektury from '../screens/wolneLektury/single/Index';
//types
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Index: React.FC = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
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
            <Stack.Screen name="SingleBible" component={SingleBible} />
            <Stack.Screen name="SingleNYTimes" component={SingleNYTimes} />
            <Stack.Screen
              name="SingleWolneLektury"
              component={SingleWolneLektury}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Index;
