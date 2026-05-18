// telas/Perfil/index.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextoPadrao from "../../componements/TextoPadrao";

export default function Perfil() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Permissão ainda não respondida
  if (!permission) {
    return <View style={styles.container} />;
  }

  // Permissão negada: exibe botão para solicitar
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissaoBox}>
          <Ionicons name="camera-outline" size={48} color="#0F5132" />
          <Text style={styles.permissaoTitulo}>Acesso à câmera</Text>
          <TextoPadrao style={styles.permissaoTexto}>
            Precisamos da sua autorização para exibir a câmera e você registrar
            sua foto de perfil.
          </TextoPadrao>
          <TouchableOpacity
            style={styles.botaoPermissao}
            onPress={requestPermission}
          >
            <Ionicons name="checkmark-circle-outline" size={18} color="#FFF" />
            <Text style={styles.botaoPermissaoTexto}>Permitir acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function salvarPerfil() {
    if (!nome.trim()) {
      Alert.alert("Atenção", "Por favor, informe seu nome completo.");
      return;
    }
    Alert.alert("Perfil salvo!", `Bem-vindo(a), ${nome}!`);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <View style={styles.iconeCabecalho}>
          <Ionicons name="person" size={28} color="#FFFFFF" />
        </View>
        <Text style={styles.titulo}>Meu Perfil</Text>
        <TextoPadrao style={styles.subtitulo}>
          Registre sua foto e preencha seus dados de contato.
        </TextoPadrao>
      </View>

      {/* Câmera */}
      <View style={styles.cameraWrapper}>
        <Text style={styles.secaoLabel}>Foto de Perfil</Text>
        <View style={styles.cameraContainer}>
          <CameraView facing={facing} style={styles.camera}>
            <View style={styles.cameraBotoes}>
              <TouchableOpacity
                style={styles.botaoVirar}
                onPress={toggleCameraFacing}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={26}
                  color="#FFF"
                />
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
        <TextoPadrao style={styles.cameraHint}>
          Toque no ícone para alternar entre câmera frontal e traseira.
        </TextoPadrao>
      </View>

      {/* Formulário */}
      <View style={styles.formulario}>
        <Text style={styles.secaoLabel}>Dados Pessoais</Text>

        {/* Nome */}
        <View style={styles.campoGroup}>
          <View style={styles.campoLabel}>
            <Ionicons name="person-outline" size={15} color="#0F5132" />
            <Text style={styles.campoTexto}>Nome completo</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: João da Silva"
            placeholderTextColor="#555"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* E-mail */}
        <View style={styles.campoGroup}>
          <View style={styles.campoLabel}>
            <Ionicons name="mail-outline" size={15} color="#0F5132" />
            <Text style={styles.campoTexto}>E-Mail</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: joao@email.com"
            placeholderTextColor="#555"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* WhatsApp */}
        <View style={styles.campoGroup}>
          <View style={styles.campoLabel}>
            <Ionicons name="logo-whatsapp" size={15} color="#0F5132" />
            <Text style={styles.campoTexto}>WhatsApp</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Ex: (11) 99999-0000"
            placeholderTextColor="#555"
            keyboardType="numeric"
            value={whatsapp}
            onChangeText={setWhatsapp}
          />
        </View>

        {/* Botão Salvar */}
        <TouchableOpacity style={styles.botaoSalvar} onPress={salvarPerfil}>
          <Ionicons name="save-outline" size={18} color="#FFF" />
          <Text style={styles.botaoSalvarTexto}>Salvar Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  content: {
    alignItems: "center",
    paddingBottom: 60,
  },

  // ── Cabeçalho ─────────────────────────────────────────
  cabecalho: {
    width: "88%",
    marginTop: 50,
    alignItems: "center",
    marginBottom: 28,
  },
  iconeCabecalho: {
    backgroundColor: "#0F5132",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  titulo: {
    fontSize: 24,
    color: "#F4F4F4",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "#A8A8A8",
    textAlign: "center",
    lineHeight: 20,
  },

  // ── Câmera ────────────────────────────────────────────
  cameraWrapper: {
    width: "88%",
    marginBottom: 24,
  },
  secaoLabel: {
    fontSize: 13,
    color: "#0F5132",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  cameraContainer: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333",
  },
  camera: {
    width: "100%",
    height: 220,
  },
  cameraBotoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 12,
  },
  botaoVirar: {
    backgroundColor: "rgba(15, 81, 50, 0.85)",
    padding: 10,
    borderRadius: 30,
  },
  cameraHint: {
    fontSize: 12,
    color: "#555",
    marginTop: 8,
    textAlign: "center",
  },

  // ── Formulário ────────────────────────────────────────
  formulario: {
    width: "88%",
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#333",
    gap: 14,
  },
  campoGroup: {
    gap: 6,
  },
  campoLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  campoTexto: {
    fontSize: 13,
    color: "#A8A8A8",
  },
  input: {
    backgroundColor: "#1C1C1C",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3A3A3A",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#F4F4F4",
  },
  botaoSalvar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0F5132",
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 6,
  },
  botaoSalvarTexto: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "700",
  },

  // ── Permissão ─────────────────────────────────────────
  permissaoBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 16,
  },
  permissaoTitulo: {
    fontSize: 20,
    color: "#F4F4F4",
    fontWeight: "bold",
    textAlign: "center",
  },
  permissaoTexto: {
    fontSize: 14,
    color: "#A8A8A8",
    textAlign: "center",
    lineHeight: 22,
  },
  botaoPermissao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#0F5132",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  botaoPermissaoTexto: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
