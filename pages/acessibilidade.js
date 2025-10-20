import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export default function Acessibilidade() {
    const items = [
        { id: '1', title: 'Leitura em voz alta' },
        { id: '2', title: 'Reduzir Efeitos' },
        { id: '3', title: 'Ajuste de cores' },
        { id: '4', title: 'Tamanho da interface' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => Alert.alert('Info', `Tapped on ${item.title}`)}
        > <Text style={styles.listText}>{item.title}</Text> <Icon name="chevron-forward" size={22} color="grey" /> </TouchableOpacity>
    );

    return (<SafeAreaView style={styles.container}>
        {/* Header */} <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}> <Icon name="arrow-back" size={24} color="black" /> </TouchableOpacity> <Text style={styles.headerTitle}>Acessibilidade</Text> </View>

        {/* List */}
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ flexGrow: 1 }}
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
            <CustomButton
                text="Manter alterações"
                onPress={() => Alert.alert('Sucesso', 'Alterações mantidas!')}
            />
            <View style={{ width: 8 }} />
            <CustomButton
                text="Voltar padrão"
                onPress={() => Alert.alert('Reset', 'Configurações resetadas para o padrão!')}
            />
        </View>
    </SafeAreaView>


    );
}

function CustomButton({ text, onPress }) {
    return (<TouchableOpacity style={styles.button} onPress={onPress}> <Text style={styles.buttonText}>{text}</Text> </TouchableOpacity>
    );
}





const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B8DDFF',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginBottom: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginLeft: 12,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    listText: { fontSize: 18, fontWeight: '500', color: 'black' },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    button: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
    },
    buttonText: { color: 'black', fontWeight: '500' },
});

