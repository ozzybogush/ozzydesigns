// src/screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/Signup';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View>
      <Text>{isLogin ? 'Login' : 'Sign Up'}</Text>
      {isLogin ? <Login /> : <SignUp />}
      <Button
        title={isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        onPress={toggleAuthMode}
      />
    </View>
  );
};

export default AuthScreen;
