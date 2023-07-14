import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";


const SongPicker = () => {

  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("MusicPlayer")
    }} style={{ backgroundColor: "black" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 8,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/playlist.png")}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Watermelon Sugar
          </Text>
          <View style={{ flexDirection: "row", marginTop: 2 }}>
            <Text style={styles.lyrics}>LYRICS</Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 12,
                marginLeft: 6,
              }}
            >
              Harry Styles
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Feather name="more-vertical" size={28} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SongPicker

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  lyrics: {
    backgroundColor: "#9D9D9D",
    fontWeight: "bold",
    paddingHorizontal: 1,
    fontSize: 8,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 4,
  },
});