import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import DailyPicScreen from "./screens.js/DailyPic";
import StarMapScreen from "./screens.js/StarMap";
import SpaceCraftScreen from "./screens.js/SpaceCrafts";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ISS" component={ISSScreen} />
        <Stack.Screen name="Meteor" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
