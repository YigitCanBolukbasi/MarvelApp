import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from '../../pages/MainPage';
import DetailPage from '../../pages/DetailPage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
