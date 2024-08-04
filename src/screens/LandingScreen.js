// LandingScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';

const LandingScreen = () => {
 
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <Text style={styles.title}>Welcome to My App</Text>
      <Footer navigation={navigation}/> 
    </View>
  );
};



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1, // Push content to the top
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },

});

export default LandingScreen;
