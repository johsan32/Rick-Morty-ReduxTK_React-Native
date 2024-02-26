import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {C_DETAIL, L_DETAIL, SPLASH, TAB} from '../utils/routes';
import MyTabs from './tabNavigation';
import MyColors from '../theme/MyColors';
import CharacterDetail from '../screens/character/characterDetail';
import LocationDetail from '../screens/location/locationDetail';
import SplashScreen from '../screens/splash';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={SPLASH}
      screenOptions={{
        headerShown: false,
        statusBarColor: MyColors.black,
      }}>
      <Stack.Screen
        name={TAB}
        component={MyTabs}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: MyColors.black},
        }}
      />
      <Stack.Screen
        name={C_DETAIL}
        component={CharacterDetail}
        options={{headerBackVisible: true}}
      />
      <Stack.Screen
        name={L_DETAIL}
        component={LocationDetail}
        options={{headerBackVisible: true}}
      />
      <Stack.Screen
        name={SPLASH}
        component={SplashScreen}
        options={{headerBackVisible: true}}
      />
    </Stack.Navigator>
  );
}
