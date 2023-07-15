import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import Chip from '../../../components/Chip';
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Library = () => {
  return (
    <SaferAreaView
      style={styles.container}
    >
      <View style={{ height: 32 }} />
      <View
        style={styles.nav}
      >
        <Text style={styles.mainText}>Your Library</Text>
        <View style={styles.navIcons}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.chipContainer}>
        <Chip text="Playlists" />
        <Chip text="Albums" />
        <Chip text="Artists" />
      </View>
      <View
        style={styles.recentContainer}
      >
        <View style={styles.recentTextRow}>
          <FontAwesome name="unsorted" size={16} color="#fff" />
          <Text style={styles.recentText}>Recents</Text>
        </View>
        <Feather name="more-vertical" size={16} color="#fff" />
      </View>
    </SaferAreaView>
  );
}

export default Library

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", paddingHorizontal: 16 },
  mainText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navIcons: {
    flexDirection: "row",
    gap: 18,
  },
  recentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    alignItems: "center",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chipContainer: { flexDirection: "row", marginTop: 24, gap: 8 },
  recentText: { color: "#fff", fontSize: 12 },
  recentTextRow: { flexDirection: "row", gap: 12, alignItems: "center" },
});