import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomInputFieldComponent} from '../../components/InputField';
import {PlaneButtonComponent} from '../../components/PlaneButton';
import {labels} from '../../config/labels';
import {AuthDetailMethod} from '../../store/actions/AuthActions';

const LoginScreen = ({navigation}) => {
  // Declare all states here
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={styles.loginWrapper}>
      <Text style={styles.loginHeadText}>{labels.loginHeading}</Text>
      <View style={styles.height20} />
      <View style={styles.height20} />
      <CustomInputFieldComponent
        placeholder={labels.email}
        value={email}
        onChange={e => setEmail(e)}
      />
      <View style={styles.height20} />
      <CustomInputFieldComponent
        placeholder={labels.password}
        secureText={true}
      />
      <View style={styles.height20} />
      <PlaneButtonComponent
        btnText={labels.login}
        onPress={() => {
          dispatch(AuthDetailMethod(email));
          navigation.navigate('DrawerStack');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loginHeadText: {
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'center',
  },
  height20: {
    height: 20,
  },
});

export default LoginScreen;
