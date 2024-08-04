// src/components/Products/ProductList.js
import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';


const ProductList = ({ products, navigation }) => {
  return (
    <View>
      <Text>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ProductList;
