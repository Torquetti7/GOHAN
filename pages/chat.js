import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, Button, Linking, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import BarraNavegacao from ".././components/navbar";

export default function Chat() {
    return(
    <View style={styles.principal}>
        <ScrollView style={styles.container}>

        </ScrollView>
        <BarraNavegacao/>
    </View>
)}

const styles = StyleSheet.create({
    principal: {
        flex: 1
    },
    container: { flex: 1, height: '100%', padding: 16, backgroundColor: "#fff" },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: 30,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 16
    },
    wrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    categoryBtn: {
        width: 120,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        margin: 8
    },
    categoryLabel: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },
});