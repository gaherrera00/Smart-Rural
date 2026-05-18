// telas/Produtos/index.tsx
import { FlatList, View, Text, StyleSheet } from "react-native";
import CadaProduto from "../Produtos/Produtos";

export default function Index({ itens }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>{itens?.titulo}</Text>
        <Text style={styles.subtitulo}>
          {itens?.lista?.length} produtos disponíveis
        </Text>
      </View>

      <FlatList
        data={itens?.lista}
        renderItem={({ item }) => <CadaProduto {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  cabecalho: {
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#0F5132",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 13,
    color: "#A8D5B5",
    marginTop: 4,
  },
  lista: {
    padding: 16,
    gap: 14,
  },
});
