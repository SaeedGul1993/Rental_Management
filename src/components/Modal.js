import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

export const CustomModalComponent = ({
  visible,
  childern,
  setVisible,
  user = false,
}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.modalInnerStyle}>{childern}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalInnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000090',
  },
});
