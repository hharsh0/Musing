import React from 'react'
import BottomNavigation from './BottomNavigation'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
    </>
  )
}

export default Navigation
