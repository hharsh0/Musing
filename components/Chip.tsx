import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    text: string
}

const Chip = ({text}:Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Chip

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2A2A",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textStyle: {
    color: "#fff",
    fontSize: 12,
  },
});