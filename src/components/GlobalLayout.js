import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const GlobalLayout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      {/* <ScrollView style={styles.content}>{children}</ScrollView>  */}
      <Footer navigation={navigation} style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default GlobalLayout;
