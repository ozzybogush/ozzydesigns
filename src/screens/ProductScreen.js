// src/screens/ProductsScreen.js

import {React, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import productsData from "../components/Products/products.json"

const ProductScreen = ( {navigation} ) => {
  
  return (
    <View> 

    <AppHeader navigation={ navigation } />
      <FlatList
            data={productsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image source={{ source: item.image }} style={styles.productImage} /> 
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>{`Price: $${item.price}`}</Text>
                {item.onSale && <Text style={styles.onSaleTag}>On Sale!</Text>}
              </View>
            )}
      />

    <Footer navigation={navigation} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  onSaleTag: {
    fontSize: 16,
    color: 'red',
  },
});

export default ProductScreen;


// import { React, useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList} from 'react-native';
// import ProductList from '../components/Products/ProductList';
// import AppHeader from '../components/AppHeader';
// import Footer from '../components/Footer';
// import { ScrollView } from 'react-native-gesture-handler';


// const ProductsScreen = ({ navigation }) => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('../components/Products/products.json'); // Replace with your JSON file path
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error reading products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);


//   return (

//     <View style={styles.container}>
//       <AppHeader navigation={navigation} />
//       {/* <Text>Products Screen</Text>
//       <ProductList products={products} navigation={navigation} /> */}
     
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <ScrollVieww style={styles.productItem}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productDescription}>{item.description}</Text>
//             <Text style={styles.productPrice}>{`Price: $${item.price}`}</Text>
//             {item.onSale && <Text style={styles.onSaleTag}>On Sale!</Text>}
//           </ScrollVieww>
//         )}
//       />

     



//       <Footer navigation={navigation} />
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   productItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   productImage: {
//     width: '100%',
//     height: 200,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   productDescription: {
//     fontSize: 16,
//   },
//   productPrice: {
//     fontSize: 16,
//     color: 'green',
//   },
//   onSaleTag: {
//     fontSize: 16,
//     color: 'red',
//   },

// });

// export default ProductsScreen;
