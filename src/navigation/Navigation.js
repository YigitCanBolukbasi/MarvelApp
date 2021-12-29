import React, {useContext} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackNavigation from './StackNavigation';
import FavoritesPage from '../pages/FavoritesPage';
import CharactersPage from '../pages/CharactersPage';
import {ThemeContext} from '../Context/ThemeContext/ThemeProvider';
import routes from './routes';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            color: colors.text,
          },
        }}>
        <Tab.Screen
          name={routes.Main_Stack}
          component={StackNavigation}
          options={{
            tabBarLabel: t('MainPage'),
            tabBarIcon: () => (
              <Icon
                name="book-open-variant"
                size={28}
                style={{color: colors.text}}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routes.Search_page}
          component={CharactersPage}
          options={{
            tabBarLabel: t('SearchCharacter'),
            tabBarIcon: () => (
              <Icon name="magnify" size={28} style={{color: colors.text}} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.Fav_Page}
          component={FavoritesPage}
          options={{
            tabBarLabel: t('FavPage'),
            tabBarIcon: () => (
              <Icon
                name="heart-outline"
                size={28}
                style={{color: colors.text}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
