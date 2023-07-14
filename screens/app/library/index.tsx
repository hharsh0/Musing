import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";
import Chip from '../../../components/Chip';

const Library = () => {
  return (
    <SaferAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ height: 32 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.mainText}>Your Library</Text>
        <View style={{ flexDirection: "row", gap: 18 }}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 24, gap: 8 }}>
        <Chip text="Playlists" />
        <Chip text="Albums" />
        <Chip text="Artists" />
      </View>
    </SaferAreaView>
  );
}

export default Library

const styles = StyleSheet.create({
  mainText:{
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  }
})