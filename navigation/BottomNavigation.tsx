import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/app/home"
import SearchScreen from "../screens/app/search"
import LibraryScreen from "../screens/app/library"
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface tabIcon {
  color: string;
  size: number;
}

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: "transparent",
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            position: "absolute",
            marginBottom: 15,
          },
          tabBarItemStyle: {
            marginBottom: 15,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }: tabIcon) => (
              <Ionicons name="ios-home-outline" size={size + 5} color={color} />
            ),
            tabBarActiveTintColor: "#ffffff",
            // tabBarLabelStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }: tabIcon) => (
              <Ionicons name="search-outline" size={size + 5} color={color} />
            ),
            tabBarActiveTintColor: "#ffffff",
            // tabBarLabelStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }: tabIcon) => (
              <Ionicons name="library" size={size + 5} color={color} />
            ),
            tabBarActiveTintColor: "#ffffff",
            // tabBarLabelStyle: { display: "none" },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomNavigation
