import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Navbar from "./Navbar";

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>For you</Text>
      <Navbar navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'yellow'
  },
})

export default Profile