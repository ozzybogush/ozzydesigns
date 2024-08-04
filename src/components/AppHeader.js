// src/components/AppHeader.js


import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CommonActions } from '@react-navigation/native';


const AppHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20

  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default AppHeader;










// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';

// const AppHeader = ({ navigation }) => {
//   return (
   
//     <View style={styles.header}>
//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('LandingScreen')}
//         >
//             <Text style={styles.buttonText}>Home</Text>
//         </Pressable>

//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('DesignScreen')}
//         >
//             <Text style={styles.buttonText}>Design</Text>
//         </Pressable>

//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('UserScreen')}
//         >
//             <Text style={styles.buttonText}>User</Text>
//         </Pressable>

//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('AdminScreen')}
//         >
//             <Text style={styles.buttonText}>Admin</Text>
//         </Pressable>

//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('Products')}
//         >
//             <Text style={styles.buttonText}>Products</Text>
//         </Pressable>

//         <Pressable
//             style={styles.button}
//             onPress={() => navigation.navigate('Sale')}
//         >
//             <Text style={styles.buttonText}>Sale</Text>
//         </Pressable>
//     </View>

//   );
// };

// const styles = StyleSheet.create({

//   header: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#333',
//     paddingVertical: 10,
//     paddingHorizontal: 16, // Add spacing to the sides
//     justifyContent: 'space-between', // Distribute buttons evenly
//   },
//   button: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default AppHeader;











// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';




// const AppHeader = ( {navigation}) => {
    
//   return (
    
//     <View style={styles.header}>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('LandingScreen')}
//       >
//         <Text style={styles.buttonText}>Home</Text>
//       </Pressable>

//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('DesignScreen')}
//       >
//         <Text style={styles.buttonText}>Design</Text>
//       </Pressable>



//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('UserScreen')}
//       >
//         <Text style={styles.buttonText}>User</Text>
//       </Pressable>
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('AdminScreen')}
//       >
//         <Text style={styles.buttonText}>Admin</Text>
//       </Pressable>

//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('Products')}
//       >
//         <Text style={styles.buttonText}>Products</Text>
//       </Pressable>
     
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.navigate('Sale')}
//       >
//         <Text style={styles.buttonText}>Sale</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#333',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default AppHeader;

