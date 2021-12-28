import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Redux from './src/redux';
import {Load, Splash} from './src/screens';
import {ChooseAccount} from './src/screens/accounts';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Redux>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{animation: 'none', headerShown: false}}>
          <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
          <Stack.Screen name="Load" component={Load} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </Redux>
  );
};

export default App;
