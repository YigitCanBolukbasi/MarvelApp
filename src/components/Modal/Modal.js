import React, {useState} from 'react';
import {Text, View, Switch, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './modal.styles';
import Button from '../Button/Button';

const SwitchModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [switchLanguage, setSwitchLanguage] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleSwitchLanguage = value => {
    setSwitchLanguage(value);
  };

  const toggleSwitchTheme = value => {
    setSwitchTheme(value);
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
              English Mode :{switchLanguage ? 'On' : 'Off'}
            </Text>
            <Switch
              value={switchLanguage}
              onValueChange={toggleSwitchLanguage}
            />
          </View>
          <View style={styles.theme}>
            <Text style={styles.text_theme}>
              Dark Mode :{switchTheme ? 'On' : 'Off'}
            </Text>
            <Switch value={switchTheme} onValueChange={toggleSwitchTheme} />
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
