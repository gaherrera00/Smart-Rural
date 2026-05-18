// telas/Produtos/Produtos.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CadaProduto({ id, nome, descricao, imagem }: any) {
  const [statusModal, acaoAbreFecha] = useState(false);

  return (
    <View>
      {/* Card do produto */}
      <TouchableOpacity
        style={styles.cartao}
        activeOpacity={0.85}
        onPress={() => acaoAbreFecha(true)}
      >
        <View style={styles.imagemContainer}>
          <Image source={imagem} style={styles.imagem} resizeMode="cover" />
        </View>
        <View style={styles.info}>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>Produto #{id}</Text>
          </View>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
          <View style={styles.rodape}>
            <Ionicons name="leaf-outline" size={14} color="#0F5132" />
            <Text style={styles.rodapeTexto}>SmartRural</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={14}
              color="#555"
              style={{ marginLeft: "auto" }}
            />
            <Text style={styles.detalhesTexto}>Ver detalhes</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal de detalhes do produto */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}
        onRequestClose={() => acaoAbreFecha(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Cabeçalho do modal */}
              <View style={styles.modalCabecalho}>
                <View style={styles.modalBadge}>
                  <Text style={styles.modalBadgeTexto}>Produto #{id}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => acaoAbreFecha(false)}
                  style={styles.botaoFechar}
                >
                  <Ionicons name="close" size={22} color="#A8A8A8" />
                </TouchableOpacity>
              </View>

              {/* Nome do produto */}
              <Text style={styles.modalNome}>{nome}</Text>

              {/* Imagem do produto */}
              <View style={styles.modalImagemContainer}>
                <Image
                  source={imagem}
                  style={styles.modalImagem}
                  resizeMode="cover"
                />
              </View>

              {/* Descrição */}
              <View style={styles.modalSecao}>
                <View style={styles.modalSecaoTitulo}>
                  <Ionicons
                    name="information-circle-outline"
                    size={18}
                    color="#0F5132"
                  />
                  <Text style={styles.modalSecaoLabel}>Descrição</Text>
                </View>
                <Text style={styles.modalDescricao}>{descricao}</Text>
              </View>

              {/* Rodapé do modal */}
              <View style={styles.modalRodape}>
                <Ionicons name="leaf" size={14} color="#0F5132" />
                <Text style={styles.modalRodapeTexto}>
                  SmartRural – Tecnologia no Campo
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // ── Card ──────────────────────────────────────────────
  cartao: {
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333333",
  },
  imagemContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
  },

  imagem: {
    width: "100%",
    height: "100%",
  },
  info: {
    padding: 14,
    gap: 6,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#0F5132",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 4,
  },
  badgeTexto: {
    fontSize: 11,
    color: "#A8D5B5",
    fontWeight: "600",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F4F4F4",
  },
  descricao: {
    fontSize: 13,
    color: "#A8A8A8",
    lineHeight: 20,
  },
  rodape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 6,
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#0F5132",
    fontWeight: "600",
  },
  detalhesTexto: {
    fontSize: 12,
    color: "#555",
  },

  // ── Modal ─────────────────────────────────────────────
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    backgroundColor: "#2A2A2A",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: "85%",
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  modalCabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalBadge: {
    backgroundColor: "#0F5132",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  modalBadgeTexto: {
    fontSize: 12,
    color: "#A8D5B5",
    fontWeight: "600",
  },
  botaoFechar: {
    backgroundColor: "#1C1C1C",
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: "#333",
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F4F4F4",
    marginBottom: 16,
  },
  modalImagemContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20,
  },

  modalImagem: {
    width: "100%",
    height: "100%",
  },
  modalSecao: {
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#333",
  },
  modalSecaoTitulo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  modalSecaoLabel: {
    fontSize: 13,
    color: "#0F5132",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  modalDescricao: {
    fontSize: 14,
    color: "#C0C0C0",
    lineHeight: 22,
    textAlign: "justify",
  },
  modalRodape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 10,
  },
  modalRodapeTexto: {
    fontSize: 12,
    color: "#555",
  },
});
