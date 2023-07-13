import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation"
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#121212" style="light" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
