import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlaylistCover = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require("../assets/playlist.png")} />
      <Text style={styles.name}>Song name</Text>
    </TouchableOpacity>
  )
}

export default PlaylistCover

const styles = StyleSheet.create({
  container:{
    marginRight: 12,
  },
  image:{
    width: 130,
    height: 130,
  },
  name:{
    color: "#fff",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "bold",
  }
})