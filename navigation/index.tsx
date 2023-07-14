import React,{useContext} from 'react'
import BottomNavigation from './BottomNavigation'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/auth/LoginScreen';
import { AuthContext } from '../context/auth-context';
import MusicPlayer from '../screens/app/common/MusicPlayer';

const Stack = createNativeStackNavigator();

const AuthStack = ()=>{
  return(
    <>
    <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    </>
  )
}

const AppStack = ()=>{
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return <>{authCtx.isAuthenticated ? <AppStack /> : <AuthStack />}</>;
}

export default Navigation
