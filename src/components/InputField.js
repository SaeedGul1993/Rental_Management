import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import FeatureIcons from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');
export const CustomInputFieldComponent = ({
  placeholder,
  label = '',
  value,
  onChange,
  rightImage,
  rightImageBool,
  inputHeight = 55,
  secureText = false,
  edit = true,
  Width = width / 1.2,
}) => {
  return (
    <>
      {label !== '' ? <Text style={styles.labelStyle}>{label}</Text> : null}
      <Input
        placeholderTextColor={'lightgrey'}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureText}
        onChangeText={onChange}
        inputStyle={styles.inputStyle}
        editable={edit}
        containerStyle={styles.containerStyle(inputHeight, Width)}
        inputContainerStyle={styles.inputContainerStyle(inputHeight)}
        rightIcon={() =>
          rightImageBool ? (
            <TouchableOpacity>
              <FeatureIcons name={rightImage} size={25} color={'grey'} />
            </TouchableOpacity>
          ) : null
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: (height, width) => ({
    borderWidth: 0.3,
    height: height,
    borderRadius: 10,
    borderColor: 'grey',
    width: width,
    alignSelf: 'center',
  }),
  inputContainerStyle: height => ({
    borderBottomWidth: 0,
    height: height,
  }),
  inputStyle: {
    color: 'black',
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    marginLeft: 45,
    marginBottom: 10,
    color: '#333',
  },
});
