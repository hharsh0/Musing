import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useState} from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Slider } from "@react-native-assets/slider";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";


const MusicPlayer = () => {
   const [seekerValue, setSeekerValue] = useState(0);

   const handleSeekerChange = (value:any) => {
     setSeekerValue(value);
     // Perform actions based on the seeker value, such as seeking the song to a specific position
   };
  return (
    <SaferAreaView style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={["#4FC0D0", "black"]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingTop: 18,
          }}
        >
          <Entypo name="chevron-thin-down" size={24} color="#fff" />
          <View>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 10 }}>
              PLAYING FROM PLAYLIST
            </Text>
            <Text
              style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
            >
              Playlist name
            </Text>
          </View>
          <Feather name="more-vertical" size={28} color="#fff" />
        </View>
        <View style={{ alignItems: "center", marginTop: 48 }}>
          <Image
            style={styles.image}
            source={require("../../../assets/playlist.png")}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 36,
              marginTop: 72,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
                Watermelon Sugar
              </Text>
              <Text style={{ fontWeight: "bold", color: "gray" }}>
                Harry Styles
              </Text>
            </View>
            <View>
              <Ionicons name="heart-outline" size={28} color="#fff" />
            </View>
          </View>

          <Slider
            style={{ width: "100%", height: 40, paddingHorizontal: 36 }}
            minimumValue={0}
            maximumValue={100}
            value={seekerValue}
            onValueChange={handleSeekerChange}
            thumbTintColor="#fff" // Customize the thumb color
            minimumTrackTintColor="#fff" // Customize the track color before the seeker
            maximumTrackTintColor="#888" // Customize the track color after the seeker
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 36,
            }}
          >
            <Text style={{ color: "#fff" }}>0:00</Text>
            <Text style={{ color: "#fff" }}>3:51</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 36,
              marginTop: 24,
              alignItems: "center",
            }}
          >
            <Ionicons name="shuffle" size={34} color="#fff" />
            <Ionicons name="play-skip-back" size={34} color="#fff" />
            <AntDesign name="play" size={52} color="#fff" />
            <Ionicons name="play-skip-forward" size={34} color="#fff" />
            <Ionicons name="ios-repeat" size={34} color="#fff" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 36,
              marginTop: 24,
            }}
          >
            <MaterialIcons name="connected-tv" size={24} color="#fff" />
            <View style={{ flexDirection: "row", gap: 32 }}>
              <Ionicons name="share-social" size={24} color="#fff" />
              <Foundation name="indent-more" size={24} color="#fff" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </SaferAreaView>
  );
}

export default MusicPlayer

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        width: 300,
        height: 280,
    }
})