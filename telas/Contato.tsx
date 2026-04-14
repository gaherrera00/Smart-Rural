import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TextoPadrao from "../componements/TextoPadrao";

type ContatoItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  valor: string;
  acao?: () => void;
};

export default function Contato() {
  const itens: ContatoItem[] = [
    {
      icon: "call-outline",
      label: "Telefone",
      valor: "+55 (11) 99999-0000",
      acao: () => Linking.openURL("tel:+5511999990000"),
    },
    {
      icon: "mail-outline",
      label: "E-mail",
      valor: "contato@smartrural.com.br",
      acao: () => Linking.openURL("mailto:contato@smartrural.com.br"),
    },
    {
      icon: "globe-outline",
      label: "Site",
      valor: "www.smartrural.com.br",
      acao: () => Linking.openURL("https://www.smartrural.com.br"),
    },
    {
      icon: "location-outline",
      label: "Endereço",
      valor: "Av. do Agronegócio, 1500\nSão Paulo – SP, 01310-100",
    },
    {
      icon: "time-outline",
      label: "Horário de Atendimento",
      valor: "Segunda a Sexta\n08h00 – 18h00",
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.cabecalho}>
        <View style={styles.iconeCabecalho}>
          <Ionicons name="leaf" size={36} color="#FFFFFF" />
        </View>
        <Text style={styles.titulo}>Fale Conosco</Text>
        <TextoPadrao style={styles.subtitulo}>
          Entre em contato com a equipe SmartRural. Estamos prontos para ajudar
          você a transformar sua propriedade.
        </TextoPadrao>
      </View>

      <View style={styles.listaContatos}>
        {itens.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cartao}
            onPress={item.acao}
            activeOpacity={item.acao ? 0.7 : 1}
          >
            <View style={styles.iconeWrapper}>
              <Ionicons name={item.icon} size={22} color="#FFFFFF" />
            </View>
            <View style={styles.cartaoTexto}>
              <Text style={styles.label}>{item.label}</Text>
              <TextoPadrao style={styles.valor}>{item.valor}</TextoPadrao>
            </View>
            {item.acao && (
              <Ionicons name="chevron-forward-outline" size={18} color="#555" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.rodape}>
        <TextoPadrao style={styles.rodapeTexto}>
          © 2025 SmartRural. Todos os direitos reservados.
        </TextoPadrao>
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
    paddingBottom: 50,
  },
  cabecalho: {
    width: "88%",
    marginTop: 50,
    alignItems: "center",
    marginBottom: 30,
  },
  iconeCabecalho: {
    backgroundColor: "#0F5132",
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    color: "#F4F4F4",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 14,
    color: "#A8A8A8",
    lineHeight: 22,
    textAlign: "center",
  },
  listaContatos: {
    width: "88%",
    gap: 12,
  },
  cartao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#333333",
  },
  iconeWrapper: {
    backgroundColor: "#0F5132",
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cartaoTexto: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  valor: {
    fontSize: 14,
    color: "#E0E0E0",
    lineHeight: 20,
  },
  rodape: {
    marginTop: 40,
    alignItems: "center",
  },
  rodapeTexto: {
    fontSize: 12,
    color: "#444444",
  },
});
