// src/components/Payment/PaymentForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
  };

  return (
    <View>
      <Text>Payment Form</Text>
      <TextInput
        placeholder="Card Number"
        onChangeText={(text) => setCardNumber(text)}
        value={cardNumber}
      />
      <TextInput
        placeholder="Expiration Date"
        onChangeText={(text) => setExpirationDate(text)}
        value={expirationDate}
      />
      <TextInput
        placeholder="CVV"
        onChangeText={(text) => setCvv(text)}
        value={cvv}
      />
      <Button title="Make Payment" onPress={handlePayment} />
    </View>
  );
};

export default PaymentForm;
