import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF5733" />
      <Text style={styles.funnyMessage}>
        {"Why did the JavaScript developer go broke? Because he used up all his cache!"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  funnyMessage: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoadingScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, Animated, Easing } from 'react-native';

// const LoadingScreen = () => {
//   const [burningPosition] = useState(new Animated.Value(0));

//   useEffect(() => {
//     // Randomly move the burning spinner horizontally
//     const moveBurning = () => {
//       Animated.loop(
//         Animated.timing(burningPosition, {
//           toValue: Math.floor(Math.random() * 200) - 100, // Random position within the screen width
//           duration: 1500,
//           useNativeDriver: false,
//           easing: Easing.linear,
//         })
//       ).start();
//     };

//     moveBurning();

//     return () => {
//       // Cleanup animation if necessary
//       burningPosition.stopAnimation();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.burning, { left: burningPosition }]} />
//       <Text style={styles.funnyMessage}>
//         {"Why did the JavaScript developer go broke? Because he used up all his cache!"}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   burning: {
//     width: 20,
//     height: 20,
//     backgroundColor: 'green',
//   },
//   funnyMessage: {
//     marginTop: 10,
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default LoadingScreen;
