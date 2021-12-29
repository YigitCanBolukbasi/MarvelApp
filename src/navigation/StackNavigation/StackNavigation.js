import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from '../../pages/MainPage';
import DetailPage from '../../pages/DetailPage';
import {useTranslation} from 'react-i18next';
import routes from '../routes';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.Main_page}
        component={MainPage}
        options={{
          title: t('MainPage'),
        }}
      />
      <Stack.Screen
        name={routes.Detail_Page}
        component={DetailPage}
        options={{
          title: t('DetailPage'),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
