// src/components/Products/ProductDetail.js
import React from 'react';
import { View, Text } from 'react-native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Text>Product Detail</Text>
      <Text>Name: {product.name}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Price: ${product.price}</Text>
    </View>
  );
};

export default ProductDetail;
