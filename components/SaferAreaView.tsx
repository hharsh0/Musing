import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import React from 'react'

const SaferAreaView = ({children, style}:any) => {
    const statusBarHeight = StatusBar.currentHeight || 0;
    const marginTop = Platform.OS === "android" ? statusBarHeight : 0;
  return (
    <SafeAreaView style={[styles.container, { marginTop }, style]}>
      {children}
    </SafeAreaView>
  );
}

export default SaferAreaView

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#121212",
        paddingHorizontal: 16,
    }
})
