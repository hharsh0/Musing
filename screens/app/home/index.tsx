import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Platform } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import Chip from '../../../components/Chip';
import PlaylistChip from '../../../components/PlaylistChip';
import PlaylistCover from '../../../components/PlaylistCover';
import { useNavigation } from "@react-navigation/native";


const Home = () => {
    const navigation = useNavigation();

  return (
    <SaferAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <ScrollView style={styles.container}>
        <View style={{ height: 32 }} />
        <View style={styles.nav}>
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            Good evening
          </Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 24, gap: 8 }}>
          <Chip text="Music" />
          <Chip text="Podcasts & Shows" />
        </View>

        {/* playlist chips */}
        <View style={styles.TopContainer}>
          <PlaylistChip />
          <PlaylistChip />
          <PlaylistChip />
          <PlaylistChip />
          <PlaylistChip />
          <PlaylistChip />
        </View>

        {/* section */}
        <View>
          <Text style={styles.sectionHeading}>Jump back in</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
          </ScrollView>
        </View>
        {/* section */}
        <View>
          <Text style={styles.sectionHeading}>Recently Played</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
            <PlaylistCover />
          </ScrollView>
        </View>
        {Platform.OS === "android" && <View style={{ height: 70 }} />}
      </ScrollView>
    </SaferAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TopContainer: {
    flexDirection: "row",
    marginTop: 24,
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },
  sectionHeading:{
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 12,
  }
});