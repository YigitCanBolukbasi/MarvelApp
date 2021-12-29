import React, {useContext} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import StackNavigation from './StackNavigation/StackNavigation';
import FavoritesPage from '../pages/FavoritesPage';
import CharactersPage from '../pages/CharactersPage';
import {ThemeContext} from '../Context/ThemeContext/ThemeProvider';
import routes from './routes';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name={routes.Main_Stack}
          component={StackNavigation}
          options={{
            tabBarLabel: t('MainPage'),
          }}
        />
        <Tab.Screen
          name={routes.Search_page}
          component={CharactersPage}
          options={{
            tabBarLabel: t('SearchCharacter'),
          }}
        />
        <Tab.Screen
          name={routes.Fav_Page}
          component={FavoritesPage}
          options={{
            tabBarLabel: t('FavPage'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
