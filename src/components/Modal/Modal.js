import React, {useState} from 'react';
import {Text, View, Switch, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchSelector from 'react-native-switch-selector';
import {useTranslation} from 'react-i18next';

import styles from './modal.styles';
import Button from '../Button/Button';

const optionsLanguage = [
  {label: 'English', value: 'en'},
  {label: 'Turkish', value: 'tr'},
];
const optionsTheme = [
  {label: 'DarkMode', value: 'DarkMode'},
  {label: 'LightMode', value: 'LightMode'},
];

const SwitchModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [switchLanguage, setSwitchLanguage] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);
  const {t, i18n} = useTranslation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button label={'Settings'} onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.container_body}>
          <View style={styles.language_body}>
            <Text style={styles.text_language}>{t('Language')}</Text>
            <SwitchSelector
              style={styles.language_switch}
              options={optionsLanguage}
              initial={0}
              onPress={language => {
                i18n.changeLanguage(language);
              }}
              textColor={'#E68C38'}
              selectedColor={'#FFFFFF'}
              buttonColor={'#E68C38'}
              borderColor={'#212121'}
              hasPadding
            />
          </View>

          <View style={styles.language_body}>
            <Text style={styles.text_language}>{t('Theme')}</Text>
            <SwitchSelector
              style={styles.language_switch}
              options={optionsTheme}
              initial={0}
              onPress={() => {
                null;
              }}
              textColor={'#E68C38'}
              selectedColor={'#FFFFFF'}
              buttonColor={'#E68C38'}
              borderColor={'#212121'}
              hasPadding
            />
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
