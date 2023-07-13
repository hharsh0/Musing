import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import Chip from '../../../components/Chip';

const Home = () => {
  return (
    <SaferAreaView style={styles.container}>
      <View style={styles.nav}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Good evening
        </Text>
        <Ionicons name="settings-outline" size={24} color="#fff" />
      </View>
      <View style={{ flexDirection:"row", marginTop: 24, gap: 8 }}>
        <Chip text="Music" />
        <Chip text="Podcasts & Shows" />
      </View>
    </SaferAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});