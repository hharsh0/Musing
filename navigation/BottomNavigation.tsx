import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/app/home"
import SearchScreen from "../screens/app/search"
import LibraryScreen from "../screens/app/library"
import PlaylistScreen from '../screens/app/common/PlaylistScreen';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface tabIcon {
  color: string;
  size: number;
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Playlist" component={PlaylistScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const LibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


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
            elevation: 0,
          },
          tabBarLabelStyle: {
            position: "absolute",
            marginBottom: 15,
          },
          tabBarItemStyle: {
            marginBottom: 15,
            // backgroundColor: "blue",
          },
          tabBarBackground: () => (
            <LinearGradient
              // Background Linear Gradient
              colors={["transparent", "rgba(0, 0, 0, 0.5)", "#000"]}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            tabBarIcon: ({ color, size }: tabIcon) => (
              <Ionicons name="ios-home-outline" size={size + 5} color={color} />
            ),
            tabBarActiveTintColor: "#ffffff",
            // tabBarLabelStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="SearchTab"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color, size }: tabIcon) => (
              <Ionicons name="search-outline" size={size + 5} color={color} />
            ),
            tabBarActiveTintColor: "#ffffff",
            // tabBarLabelStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="LibraryTab"
          component={LibraryStack}
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
