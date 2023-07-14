import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation"
import AuthContextProvider from "./context/auth-context";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <StatusBar backgroundColor="#121212" style="light" />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  );
}
