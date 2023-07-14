import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlaylistChip = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require("../assets/playlist.png")} />
      <Text style={styles.text}>Your Time Capsule</Text>
    </TouchableOpacity>
  )
}

export default PlaylistChip

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2A2A",
    flexDirection: "row",
    borderRadius: 6,
    alignItems: "center",
    width: 160,
  },
  image: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  text: {
    color: "#ffffff",
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "bold",
    flexWrap: "wrap", // Add this line to make the text wrap to the next line
    flexShrink: 1, // Add this line to allow the text to shrink if needed
  },
});