import { FlatList, View } from "react-native";
import TextoPadrao from "../../componements/TextoPadrao";
import CadaProduto from "../Produtos/Produtos";

export default function Index({ itens }: any) {
  return (
    <View>
      <TextoPadrao>{itens.titulo}</TextoPadrao>

      <FlatList
        data={itens.lista}
        renderItem={({ item }) => <CadaProduto item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
