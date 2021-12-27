import React, {useState} from 'react';
import {Text, View, TouchableOpacity, I18nManager} from 'react-native';

import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './modal.styles';
import Button from '../Button';

const SwitchModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr').then(() => {
      I18nManager.forceRTL(i18n.language === 'tr');
    });
  };

  return (
    <View style={styles.container}>
      <Button label={'settings'} onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.container_body}>
          <View style={styles.language}>
            <Text style={styles.text_language}>
              {t('Language') ? 'English' : 'Türkçe'}
            </Text>
            <Button label="Switch Language" onPress={onChangeLanguage} />
          </View>
          <View style={styles.theme}>
            <Text style={styles.text_theme}>
              {/* Dark Mode : {switchTheme ? 'On' : 'Off'} */}
            </Text>
            {/* <Switch value={switchTheme} onValueChange={toggleSwitchTheme} /> */}
          </View>
          {/* <Button label={'Exit'} onPress={toggleModal} theme="lightTheme" /> */}
          <TouchableOpacity onPress={toggleModal}>
            <Icon
              name="close-circle-outline"
              style={styles.icon_exit}
              size={40}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SwitchModal;
