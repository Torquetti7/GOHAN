import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { popupStyles } from '../components/popup';

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ContestarStrike() {
    // ---- Página Contestar Strike ----
    const [exitModalVisible, setExitModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.appBar}>
                <Text style={styles.appBarText}>Strike</Text>
            </View>

            <Modal visible={exitModalVisible} transparent animationType="fade">
                <View style={popupStyles.centeredView}>
                    <View style={popupStyles.modalView}>
                        <Text style={popupStyles.modalText}>Tem certeza que deseja sair?</Text>

                        <View style={popupStyles.modalButtons}>
                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.noButton]}
                                onPress={() => setExitModalVisible(false)}
                            >
                                <Text style={popupStyles.noButtonText}>Não</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[popupStyles.modalButton, popupStyles.yesButton]}

                            >
                                <Text style={popupStyles.yesButtonText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                <View style={styles.card}>
                    <Image source={require("../assets/profile.png")} style={styles.avatar} />
                    <Text style={styles.title}>Denunciante</Text>
                    <Text style={styles.subtitle}>Joana Silva</Text>

                    <Text style={styles.title}>Profissional</Text>
                    <Text style={styles.subtitle}>Carlos Souza</Text>

                    <Text style={styles.title}>Serviço</Text>
                    <Text style={styles.subtitle}>Limpeza Residencial</Text>

                    <Text style={styles.details}>Data: 08/06/2025</Text>
                    <Text style={styles.details}>Hora: 09:00</Text>
                    <Text style={styles.details}>Local: Rua das Flores, 123</Text>

                    <Text style={styles.title}>Motivo</Text>
                    <Text style={styles.justify}>
                        O profissional não compareceu ao serviço agendado sem aviso prévio,
                        causando transtornos ao cliente.
                    </Text>

                    <View style={styles.row}>

                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: "red" }]}
                             onPress={() => setExitModalVisible(true)}
                        >
                            <Text style={styles.buttonText}>Contestar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );


    // ---- Navegação ----

    function MainTabs() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === "Home") iconName = "home-outline";
                        else if (route.name === "Historico") iconName = "time-outline";
                        else if (route.name === "Perfil") iconName = "person-outline";
                        else if (route.name === "Chat") iconName = "chatbubble-outline";
                        else if (route.name === "Notificacoes") iconName = "notifications-outline";

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Historico" component={View} />
                <Tab.Screen name="Perfil" component={View} />
                <Tab.Screen name="Chat" component={View} />
                <Tab.Screen name="Notificacoes" component={NotificationsPage} />
            </Tab.Navigator>
        );
    }



}

// ---- Estilos ----
const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    appBar: {
        backgroundColor: "#fff",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    appBarText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
    },
    details: {
        fontSize: 14,
        marginTop: 4,
    },
    justify: {
        fontSize: 14,
        marginTop: 8,
        textAlign: "justify",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    button: {
        padding: 12,
        borderRadius: 8,
        minWidth: 120,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

