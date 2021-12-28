import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNavigation from './StackNavigation/StackNavigation';
import FavoritesPage from '../pages/FavoritesPage';
import CharactersPage from '../pages/CharactersPage';
import routes from './routes';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={routes.Main_page} component={StackNavigation} />
        <Tab.Screen name={routes.Search_page} component={CharactersPage} />
        <Tab.Screen name={routes.Fav_Page} component={FavoritesPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
