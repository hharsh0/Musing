import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import SaferAreaView from '../../components/SaferAreaView'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from '../../context/auth-context'

const LoginScreen = () => {
  const authContext = useContext(AuthContext)
  const loginHandler=()=>{
    console.log("Login")
    authContext.login("token")
  }
  return (
    <SaferAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        colors={["#4FC0D0", "black"]}
      >
        <Entypo name="spotify" size={64} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
          Millions of songs.
        </Text>
        <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
          Free on Spotify.
        </Text>
        <TouchableOpacity onPress={loginHandler} style={{ width: "100%", paddingHorizontal: 24 }}>
          <View style={styles.auth}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 24 }}
            >
              {/* <AntDesign name="google" size={24} color="#fff" /> */}
              <Image style={styles.image} source={require("../../assets/google.png")} />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Continue with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SaferAreaView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  auth: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    borderColor: "#fff",
  },
  image:{
    width: 30,
    height: 30,
  }
});