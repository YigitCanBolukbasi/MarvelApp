import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchSelector from 'react-native-switch-selector';

import styles from './modal.styles';

const optionsLanguage = [
  {label: 'English', value: 'en'},
  {label: 'Turkish', value: 'tr'},
];

const SwitchModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {t, i18n} = useTranslation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="cog"
        size={28}
        onPress={toggleModal}
        style={styles.icon_settings}
      />
      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        onBackdropPress={toggleModal}>
        <View style={styles.container_body}>
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
