import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNavigation from './StackNavigation/StackNavigation';
import FavoritesPage from '../pages/FavoritesPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="mainpage" component={StackNavigation} />
        <Tab.Screen name="Fav" component={FavoritesPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
