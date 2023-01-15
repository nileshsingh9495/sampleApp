import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';

import Input from '../components/Input';
import Button from './../components/Button';
import COLORS from '../const/colors';
import {showSuccess, showError} from '../utils/SnackBar';
import {useNavigation} from '@react-navigation/native';

const DEFAULT_EMAIL = 'nilesh@demo.com';
const DEFAULT_PASSWORD = '123456';

const LoginPage = () => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateForm = async () => {
    Keyboard.dismiss();
    let isValid = true;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (inputs.email && !emailRegex.test(inputs.email)) {
      handleError('Invalid Email Format', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      submitForm();
    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const submitForm = () => {
    if (
      inputs.email === DEFAULT_EMAIL &&
      inputs.password === DEFAULT_PASSWORD
    ) {
      showSuccess('Success Login');
      navigation.navigate('Home');
    } else {
      showError('Invalid Details');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.loginText}>Log In</Text>
      <Text style={styles.emailText}>Enter Your Details to Login</Text>
      <View style={styles.formView}>
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
          maxLength={40}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
          maxLength={10}
        />
        <Button title="Log In" onPress={validateForm} />
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loginText: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: 'bold',
  },
  emailText: {
    color: COLORS.black,
    fontSize: 18,
    marginVertical: 10,
  },
  formView: {
    marginVertical: 20,
    paddingBottom: 40,
  },
});
