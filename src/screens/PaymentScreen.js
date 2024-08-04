// src/screens/PaymentScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import PaymentForm from '../components/Payment/PaymentForm';

const PaymentScreen = () => {
  return (
    <View>
      <Text>Payment Screen</Text>
      <PaymentForm />
    </View>
  );
};

export default PaymentScreen;
