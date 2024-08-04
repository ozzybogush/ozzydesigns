// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProductScreen from '../screens/ProductScreen';
import SaleScreen from '../screens/SaleScreen';
import UserScreen from '../screens/UserScreen';
import AdminScreen from '../screens/AdminScreen';
import LandingScreen from '../screens/LandingScreen';
import DesignScreen from '../screens/DesignScreen'

// const Stack = createStackNavigator();
// TODO: App.js took over this functionality, remove soon
const AppNavigator = () => {
  // return (
  //   <NavigationContainer>
  //      <NavigationContainer>
  //     <Stack.Navigator initialRouteName="LandingScreen">
  //       <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
  //       <Stack.Screen name="DesignScreen" component={DesignScreen} options={{ title: 'Design' }} />
  //       <Stack.Screen name="UserScreen" component={UserScreen} options={{ title: 'User' }} />
  //       <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ title: 'Admin' }} />
  //       <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Products' }} />
  //       <Stack.Screen name="SaleScreen" component={SaleScreen} options={{ title: 'Sale' }} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   </NavigationContainer>
  // );
};

// const AppHeaderWrapper = () => {
//   const navigation = useNavigation();
//   return <AppHeader navigation={navigation} />;
// };


export default AppNavigator;
