import { Children } from "react";
import { Text, StyleSheet } from "react-native";

export default function TextoPadrao({ children }: any) {
  return <Text style={estilos.padrao}>{children}</Text>;
}
const estilos = StyleSheet.create({
  padrao: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
    textAlign: "justify",
  },
});
