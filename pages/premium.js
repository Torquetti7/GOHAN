import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";

// ---- Tela Home ----
export default function premium() {
  const categories = [
    {
      texts: [
        "Plano Essencial (Gratuito)",
        "Criação de perfil profissional",
        "Portifolio limitado",
        "Taxa de serviço",
        "Visibilidade limitada na busca",
        "Portifólio com até 5 fotos",
      ],
      color: "#D9D9D9",
    },
    {
      texts: [
        "Plano Premium",
        "Inclui tudo do plano essencial +",
        "Destaque nos resultados de busca",
        "Acesso a estatísticas do perfil",
        "Tempo médio de resposta exibido",
        "Selo de profissional verificado",
        "Diminuição da taxa de serviço",
        "Portifólio com até 20 fotos",
      ],
      color: "#63B9FF",
    },
    {
      texts: [
        "Plano Deluxe",
        "Inclui tudo do Profissional +",
        'Selo de "Destaque da Semana"',
        "Agendamento automático de clientes",
        "Anúncios promovidos dentro do app",
        "Consultoria mensal com especialista",
        "Exportação de dados e histórico",
        "Acesso antecipado a novas ferramentas",
      ],
      color: "#F59342",
    },
  ];

  const actionButtons = [
    {
      label: "Experimente Grátis o Premium",
      url: "https://contato.example.com",
    },
    {
      label: "Assinar um dos planos",
      url: "https://suporte.example.com",
    },
  ];

  const buttonColors = ["#63B9FF", "#F59342"];

  const buildLinkButton = (texts, color) => (
    <View style={[styles.planBox, { backgroundColor: color }]}>
      {texts.map((text, idx) => (
        <Text
          key={idx}
          style={idx === 0 ? styles.planTitle : styles.planText}
        >
          {text}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Conteúdo */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.heading}>Planos disponíveis</Text>

        <View style={styles.wrap}>
          {categories.map((cat, i) => (
            <View key={i}>{buildLinkButton(cat.texts, cat.color)}</View>
          ))}
        </View>

        <View style={styles.actionRow}>
          {actionButtons.map((btn, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.actionButton, { backgroundColor: buttonColors[idx] }]}
              onPress={() => Linking.openURL(btn.url)}
            >
              <Text style={styles.actionButtonText}>{btn.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// ---- Estilos ----
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  appBar: {
    backgroundColor: "blue",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  planBox: {
    width: 360,
    borderRadius: 30,
    padding: 12,
    marginVertical: 6,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 4,
  },
  planText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginVertical: 2,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  actionButton: {
    width: 160,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});

