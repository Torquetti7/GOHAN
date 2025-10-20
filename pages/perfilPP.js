import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Image 
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function perfilPP() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-outline" size={40} color="#333" />
          </View>

          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gOl4CUsIyj2gIWdLxnDdjBdmMQSSXP.png",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.jobTitle}>Carpinteiro</Text>
          <Text style={styles.location}>Carapicuíba, São Paulo</Text>

          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>Sobre mim:</Text>
            <Text style={styles.aboutText}>
              Possuo mais de 10 anos de experiência na área
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Portfólio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Comentários</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Conversar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Analytics Section */}
        <View style={styles.analyticsSection}>
          <View style={styles.analyticsTitleContainer}>
            <Text style={styles.analyticsTitle}>Análise</Text>
            <MaterialCommunityIcons name="chart-bar" size={20} color="#333" />
          </View>

          {/* Stat Items */}
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="chart-bar" size={24} color="#333" />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>12 Visualizações no seu perfil</Text>
              <Text style={styles.statDescription}>
                Faça notificações no seu perfil para atrair mais clientes
              </Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#333" />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>5 Clientes entraram em contato</Text>
              <Text style={styles.statDescription}>
                Procure dar mais experiências personalizadas para seus clientes
              </Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <MaterialCommunityIcons name="calendar-blank" size={24} color="#333" />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>4 Serviços realizados</Text>
              <Text style={styles.statDescription}>
                Total de serviços realizados em todo período
              </Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <MaterialCommunityIcons name="star-outline" size={24} color="#333" />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>4.3 Nota Média</Text>
              <Text style={styles.statDescription}>
                Média geral de todas as avaliações
              </Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <MaterialCommunityIcons name="clock-outline" size={24} color="#333" />
            <View style={styles.statTextContainer}>
              <Text style={styles.statNumber}>2:30 Tempo de resposta médio</Text>
              <Text style={styles.statDescription}>
                Quanto tempo leva para responder
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1565C0",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  profileSection: {
    backgroundColor: "#fff",
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  logoContainer: {
    width: 200,
    height: 80,
    marginBottom: 16,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  aboutSection: {
    width: "100%",
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
  actionButton: {
    backgroundColor: "#1565C0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  analyticsSection: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  analyticsTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 8,
  },
  analyticsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    gap: 12,
  },
  statTextContainer: {
    flex: 1,
  },
  statNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  statDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
});
