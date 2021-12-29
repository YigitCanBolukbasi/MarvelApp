import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import MainPage from '../../pages/MainPage';
import DetailPage from '../../pages/DetailPage';
import routes from '../routes';
import Modal from '../../components/Modal';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <Modal />,
      }}>
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
