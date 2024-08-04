// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from "../src/screens/UserScreen"
import AppNavigator from './navigation/AppNavigator';
import LandingScreen from './screens/LandingScreen';
import DesignScreen from './screens/DesignScreen';
import AdminScreen from './screens/AdminScreen';
import ProductScreen from './screens/ProductScreen';
import SaleScreen from './screens/SaleScreen';


const Stack = createNativeStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DesignScreen"
          component={DesignScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Sale"
          component={SaleScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AuthNavigator from './navigation/AuthNavigator';
// import AppNavigator from './navigation/AppNavigator';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Auth"
//           component={AuthNavigator}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="App"
//           component={AppNavigator}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
