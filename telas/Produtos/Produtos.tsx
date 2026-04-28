import { Card } from "react-native-paper";

import TextoPadrao from "../../componements/TextoPadrao";

export default function CadaProdutos({ id, nome, descricao, imagem }: any) {
  return (
    <Card mode="elevated">
      <Card.Content>
        <TextoPadrao>{nome}</TextoPadrao>
        <TextoPadrao>{descricao}</TextoPadrao>
      </Card.Content>
      <Card.Cover source={imagem}></Card.Cover>
    </Card>
  );
}
