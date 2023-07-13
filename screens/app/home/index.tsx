import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import Chip from '../../../components/Chip';
import PlaylistChip from '../../../components/PlaylistChip';
import PlaylistCover from '../../../components/PlaylistCover';

const Home = () => {
  return (
    <SaferAreaView style={{ flex: 1 }}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeading:{
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 12,
  }
});