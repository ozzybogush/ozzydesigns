// src/screens/SaleScreen.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import productsData from '../components/Products/products.json';

import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';

const SaleScreen = ({navigation}) => {

  const getOnSaleProducts = () => {
    return productsData.filter((product) => product.onSale);
  };

  const renderProductItems = () => {
    const onSaleProducts = getOnSaleProducts();
    return onSaleProducts.map((product) => (
      <View key={product.id} style={styles.productItem}>
        <Text>{product.name}</Text>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text>{product.description}</Text>
        <Text>{`Price: $${product.price}`}</Text>
      </View>
    ));
  };


  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation}/>
      <Text>Sale Screen</Text>
      {/* <Text>Your order has been placed successfully!</Text> */}
      <Text style={styles.title}>On Sale Products</Text>
      {renderProductItems()}

      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

})

export default SaleScreen;
