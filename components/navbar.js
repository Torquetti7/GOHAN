import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, Button, Linking, StyleSheet } from "react-native";

export default function BarraNavegacao() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate("premium")}> <Image source={require("../assets/notification.png")} style={styles.icones}></Image>        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>    <Image source={require("../assets/home.png")} style={styles.icones}></Image>     </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("agenda")}>    <Image source={require("../assets/Message.png")} style={styles.icones}></Image>     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: '#B8DDFF',
    zIndex: 3,
  },
  icones: {
    width: 40,
    height: 40
  }
});