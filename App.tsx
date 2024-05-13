import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './src/screens/StartScreen';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Makanan from './src/screens/Makanan';
import Minuman from './src/screens/Minuman';
import Desert from './src/screens/Desert';
import Pesanan from './src/screens/Pesanan';
import Pembayaran from './src/screens/Pembayaran';
import Profil from './src/screens/Profil';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Makanan"
          component={Makanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Desert"
          component={Desert}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Minuman"
          component={Minuman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Pembayaran"
          component={Pembayaran}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Pesanan"
          component={Pesanan}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
