import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
//import AuthService from "../services/authService";

export default function RegisterScreen() {
  const navigation = useNavigation();
  //const auth = new AuthService();

  // Estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [userType, setUserType] = useState("comum");
  const [workerTags, setWorkerTags] = useState([]);

  const allTags = ["Marceneiro", "Encanador", "Eletricista"];

  // Funções de validação
  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^0-9]/g, "");
    if (cpf.length !== 11) return false;
    if (/^(\d)\1*$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
  };

  const isCepValid = (cep) => /^\d{5}-?\d{3}$/.test(cep);

  // Lógica principal
  const handleRegister = async () => {
    try {
      if (userType === "trabalhador") {
        if (!validarCPF(cpf)) {
          Alert.alert("Erro", "CPF inválido");
          return;
        }
        if (!isCepValid(cep)) {
          Alert.alert("Erro", "CEP inválido");
          return;
        }
      }

      await auth.register({
        email,
        password,
        userType,
        cpf: cpf.replace(/[^0-9]/g, ""),
        cep,
        tags: workerTags,
      });

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Erro", e.message || "Falha ao cadastrar");
    }
  };

  const toggleTag = (tag) => {
    setWorkerTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Tipo de usuário */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            userType === "comum" && styles.optionSelected,
          ]}
          onPress={() => setUserType("comum")}
        >
          <Text>Usuário Comum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            userType === "trabalhador" && styles.optionSelected,
          ]}
          onPress={() => setUserType("trabalhador")}
        >
          <Text>Trabalhador</Text>
        </TouchableOpacity>
      </View>

      {userType === "trabalhador" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />

          <View style={styles.tagsContainer}>
            {allTags.map((tag) => {
              const selected = workerTags.includes(tag);
              return (
                <TouchableOpacity
                  key={tag}
                  onPress={() => toggleTag(tag)}
                  style={[
                    styles.tag,
                    selected && styles.tagSelected,
                  ]}
                >
                  <Text
                    style={{
                      color: selected ? "#fff" : "#333",
                    }}
                  >
                    {tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
  },
  optionSelected: {
    backgroundColor: "#cde",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    margin: 4,
  },
  tagSelected: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
});
