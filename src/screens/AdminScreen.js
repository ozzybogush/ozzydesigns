// src/screens/AdminScreen.js
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ProductService from '../components/Products/ProductService';


const AdminScreen = () => {
  const productService = new ProductService();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSaveProduct = async () => {
    try {
      // Validate input fields
      if (!name || !description || !price || !category) {
        throw new Error('Please fill in all fields.');
      }

      // Prepare product data
      const productData = {
        name,
        description,
        price: parseFloat(price),
        category,
      };

      // Save the product using ProductService
      await productService.saveProduct(productData);

      // Set success feedback message
      setFeedbackMessage('Product saved successfully.');
    } catch (error) {
      // Log the error
      console.error('Error saving product:', error);

      // Set error feedback message
      setFeedbackMessage(`Error: ${error.message}`);
    }
  };

  // Clear feedback message after 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFeedbackMessage('');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [feedbackMessage]);

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Button title="Save Product" onPress={handleSaveProduct} />
      {feedbackMessage ? <Text style={styles.feedbackMessage}>{feedbackMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  feedbackMessage: {
    marginTop: 16,
    color: 'green',
    textAlign: 'center',
  },
});

export default AdminScreen;



// const AdminScreen = ({navigation}) => {
//   return (
//     <View style={styles.container}> 
//        <AppHeader navigation={navigation}/>
//       <Text>Admin Dashboard</Text>
//       <ScrollView>
//         {/* Add scroll stuff here */}
//       </ScrollView>
//       <Footer navigation={navigation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({ 
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
  


// })

// export default AdminScreen;
