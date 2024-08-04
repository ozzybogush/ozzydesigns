// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';


// const Footer = ( {navigation}) => {
  

//   return (
//     <View style={styles.footer}>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('LandingScreen')}
//       >
//         <Text style={styles.buttonText}>Home</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('DesignScreen', { screen: 'DesignScreen' })}
//       >
//         <Text style={styles.buttonText}>Design</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('UserScreen', { screen: 'UserScreen' })}
//       >
//         <Text style={styles.buttonText}>User</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('AdminScreen', { screen: 'Admin' })}
//       >
//         <Text style={styles.buttonText}>Admin</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('Products', { screen: 'Products' })}
//       >
//         <Text style={styles.buttonText}>Products</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('Sale', { screen: 'Sale' })}
//       >
//         <Text style={styles.buttonText}>Sale</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     flexDirection: 'row',
//     backgroundColor: '#333',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     left: 0,
//     right: 0,
//   },
  
//   button: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default Footer;


import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('LandingScreen')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('DesignScreen', { screen: 'DesignScreen' })}
      >
        <Text style={styles.buttonText}>Design</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('UserScreen', { screen: 'UserScreen' })}
      >
        <Text style={styles.buttonText}>User</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('AdminScreen', { screen: 'Admin' })}
      >
        <Text style={styles.buttonText}>Admin</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Products', { screen: 'Products' })}
      >
        <Text style={styles.buttonText}>Products</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Sale', { screen: 'Sale' })}
      >
        <Text style={styles.buttonText}>Sale</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  button: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Footer;