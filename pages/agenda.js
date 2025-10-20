import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Linking,
} from "react-native";

export default function Agenda() {
    return (
        <SafeAreaView style={styles.container}>
            <HomePage />
        </SafeAreaView>
    );


    function HomePage() {
        const categories = [
            {
                texts: ["Período de Serviço", "8:00 - 13:30"],
                buttonLabel: "Adicionar\nPeríodo",
                buttonUrl: "https://contato.example.com",
            },
            {
                texts: [
                    "Período de Serviço",
                    "8:00 - 13:30",
                    "Descrição: Consertar furos de paredes",
                ],
                buttonLabel: "Adicionar\nCompromisso",
                buttonUrl: "https://suporte.example.com",
            },
        ];

        const buildInfoBox = ({ texts, buttonLabel, buttonUrl }) => (
            <View style={styles.infoBox}>
                {/* Botão à esquerda */}
                <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() => Linking.openURL(buttonUrl)}
                >
                    <Text style={styles.infoButtonText}>{buttonLabel}</Text>
                </TouchableOpacity>

                {/* Textos à direita */}
                <View style={styles.infoTexts}>
                    {texts.map((text, idx) => (
                        <Text
                            key={idx}
                            style={[
                                styles.infoText,
                                idx === 0 ? styles.infoTitle : styles.infoSubtitle,
                            ]}
                        >
                            {text}
                        </Text>
                    ))}
                </View>
            </View>
        );

        return (
            <View style={{ flex: 1 }}>
                {/* AppBar fake */}
                <View style={styles.appBar}>
                    <TextInput
                        placeholder="Pesquisar..."
                        style={styles.searchInput}
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Conteúdo */}
                <ScrollView style={{ padding: 16 }}>
                    <Text style={styles.sectionTitle}>Agenda</Text>
                    {buildInfoBox(categories[0])}

                    <Text style={styles.sectionTitle}>Segunda</Text>
                    {buildInfoBox(categories[1])}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    appBar: {
        backgroundColor: "#2196F3",
        padding: 12,
        height: 80,
        justifyContent: "flex-end",
    },
    searchInput: {
        backgroundColor: "#fff",
        borderRadius: 30,
        paddingHorizontal: 16,
        height: 40,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 16,
        textAlign: "center",
    },
    infoBox: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        marginBottom: 24,
    },
    infoButton: {
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 12,
    },
    infoButtonText: {
        color: "#000",
        textAlign: "center",
    },
    infoTexts: {
        flex: 1,
    },
    infoText: {
        color: "#000",
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    infoSubtitle: {
        fontSize: 14,
    },
});
