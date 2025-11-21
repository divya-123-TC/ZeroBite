import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import UploadFoodScreen from "../screens/UploadFoodScreen";
// ? REMOVE MapScreen import (web will crash)
// import MapScreen from "../screens/MapScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UploadFood" component={UploadFoodScreen} />
        
        {/* ? DO NOT import MapScreen manually */}
        {/* Expo Router will automatically load map.js or map.web.js */}
        <Stack.Screen name="Map" />

        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
