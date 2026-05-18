// telas/Produtos/Produtos.tsx
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CadaProduto({ id, nome, descricao, imagem }: any) {
  return (
    <TouchableOpacity style={styles.cartao} activeOpacity={0.85}>
      <View style={styles.imagemContainer}>
        <Image source={imagem} style={styles.imagem} resizeMode="contain" />
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
        </View>
      </View>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
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
    justifyContent: "center",
    alignItems: "center",
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
});
