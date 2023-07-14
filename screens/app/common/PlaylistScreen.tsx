import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SongPicker from '../../../components/SongPicker';

const PlaylistScreen = () => {
  const navigation = useNavigation();
  return (
    // <LinearGradient colors={["#4FC0D0", "black"]} style={styles.container}>
    <SaferAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={["#4FC0D0", "black"]}>
          <View style={styles.head}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back-outline" size={32} color="#ffffff" />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../../../assets/playlist.png")}
            />
            <Text style={styles.discription}>
              A mega mix of 75 favorites from the last few years!
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              marginVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            <Entypo name="spotify" size={24} color="black" />
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Spotify</Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                paddingHorizontal: 16,
              }}
            >
              7,340,688 likes . 4h 1min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Ionicons name="heart-outline" size={28} color="#fff" />
              <Ionicons name="download-outline" size={28} color="#fff" />
              <Feather name="more-vertical" size={28} color="#fff" />
            </View>
            <View
              style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
              <Ionicons name="shuffle" size={34} color="#fff" />
              <AntDesign name="play" size={34} color="#fff" />
            </View>
          </View>
        </LinearGradient>

        <View style={{ paddingHorizontal: 16, backgroundColor: "black" }}>
          <SongPicker />
          <SongPicker />
          <SongPicker />
          <SongPicker />
          <SongPicker />
          <SongPicker />
          <SongPicker />
          <SongPicker />
        </View>
        {Platform.OS === "android" && <View style={{ height: 70, backgroundColor:"black" }} />}
      </ScrollView>
    </SaferAreaView>
    // </LinearGradient>
  );
}

export default PlaylistScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 4,
    zIndex: 1,
  },
  head: {
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  discription: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 18,
  },
});