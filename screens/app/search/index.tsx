import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import SaferAreaView from '../../../components/SaferAreaView'
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <SaferAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ height: 32 }} />
      <Text style={styles.mainText}>Search</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="ios-search" size={28} color="black" />
        <TextInput placeholder="Artists, songs or podcasts" />
      </View>
      <Text
        style={{
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 16,
          marginVertical: 12,
        }}
      >
        Browse all
      </Text>
    </SaferAreaView>
  );
}

export default Search

const styles = StyleSheet.create({
  mainText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer:{
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 6,
  }
});