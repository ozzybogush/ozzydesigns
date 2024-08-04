// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import ProductsScreen from './screens/ProductScreen';
import PaymentScreen from './screens/PaymentScreen';
import SaleScreen from './screens/SaleScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Sale" component={SaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
