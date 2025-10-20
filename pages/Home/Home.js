import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import BarraNavegacao from "../../components/navbar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";


const { width } = Dimensions.get("window");

export default function Home() {
  const categories = [
    {
      label: "Limpeza doméstica",
      url: "https://example.com",
      color: "#1ab6d1",
      image: require("../../assets/broom.png"),
    },
    {
      label: "Suporte Técnico",
      url: "https://example.com",
      color: "#4226e2",
      image: require("../../assets/cpu.png"),
    },
    {
      label: "Pedreiro",
      url: "https://example.com",
      color: "#d6960a",
      image: require("../../assets/hammer.png"),
    },
  ];

  const navigation = useNavigation();
  const openLink = (url) => Linking.openURL(url);

  // Estado do menu lateral
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  // Cada item do menu leva a uma tela diferente
  const menuItems = [
    { label: "Configuração", icon: "settings", route: "configuracoes" },
    { label: "Histórico", icon: "history", route: "Historico" },
    { label: "Estatísticas", icon: "bar-chart", route: "Estatisticas" },
    { label: "Premium", icon: "star", route: "premium" },
    { label: "Favoritos", icon: "favorite", route: "Favoritos" },
    { label: "Gerenciar Perfil", icon: "manage-accounts", route: "perfilPP" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Barra de busca */}
        <View style={styles.searchBar}>
          <Icon name="search" size={24} color="gray" />
          <TextInput
            placeholder="Pesquisar..."
            style={{ flex: 1, marginLeft: 8 }}
          />

          {/* Botão do sino que abre o menu lateral */}
          <TouchableOpacity onPress={toggleMenu}>
            <Icon name="notifications" size={26} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Categorias Populares</Text>
        <View style={styles.wrap}>
          {categories.map((cat, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.categoryBtn, { backgroundColor: cat.color }]}
              onPress={() => navigation.navigate("teste")}
            >
              <Image source={cat.image} style={{ width: 32, height: 32 }} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BarraNavegacao/>
      {/* Menu lateral*/}
      {menuVisible && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleMenu}
          style={styles.overlay}
        >
          <Animated.View
            style={[
              styles.sideMenu,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            {/* Cabeçalho do menu */}
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Itens com rotas individuais */}
            <View style={styles.menuContent}>
              {menuItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate(item.route);
                  }}
                >
                  <Icon name={item.icon} size={24} color="#444" />
                  <Text style={styles.menuText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryBtn: {
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 8,
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },

  // Estilos do menu lateral
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sideMenu: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    padding: 20,
    elevation: 10,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuContent: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
});
