import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import BottomNavigation from './BottomNavigation';
import SingleBritish from '../screens/britishNationalBibliography/single/Index';
import SingleGoogle from '../screens/googleBooks/single/Index';
import SinglePenguin from '../screens/penguinPublishing/single/Index';
//types
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Index: React.FC = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="SingleBritish" component={SingleBritish} />
            <Stack.Screen name="SingleGoogle" component={SingleGoogle} />
            <Stack.Screen name="SinglePenguin" component={SinglePenguin} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Index;
