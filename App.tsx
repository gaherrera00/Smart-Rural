import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Sobre() {
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    },
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.caixaImagem}>
        <Image
          source={require("./assets/logoComFundo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.divTexto}>
        <Text style={styles.titulo}>SmartRural</Text>
        <Text style={styles.paragrafo}>
          A SmartRural é uma empresa focada em soluções digitais para o campo.
          Atua no desenvolvimento de tecnologia voltada à gestão rural,
          conectividade e otimização de processos agrícolas.
        </Text>
        <Text style={styles.paragrafo}>
          Seu objetivo é simplificar o controle da propriedade, centralizando
          dados, métricas e operações em uma única plataforma intuitiva. A
          proposta é unir tradição e inovação, permitindo que produtores tomem
          decisões mais rápidas, precisas e estratégicas.
        </Text>
        <Text style={styles.paragrafo}>
          Com uma abordagem prática e funcional, a SmartRural busca aumentar
          produtividade, reduzir desperdícios e trazer mais controle sobre as
          atividades do dia a dia no campo.
        </Text>
      </View>
      <View style={styles.caixaVideo}>
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>
    </ScrollView>
  );
}

function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "paw-outline";

          if (route.name === "Sobre") {
            iconName = focused ? "paw" : "paw-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#CCCCCC",
        tabBarStyle: {
          backgroundColor: "#0F5132",
          borderTopWidth: 0,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  caixaImagem: {
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: "#0F5132",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 12,
  },
  divTexto: {
    width: "88%",
    marginTop: 35,
  },
  titulo: {
    fontSize: 24,
    color: "#F4F4F4",
    fontWeight: "bold",
    marginBottom: 14,
    textAlign: "center",
  },
  paragrafo: {
    color: "#A8A8A8",
    marginTop: 14,
    lineHeight: 22,
    fontSize: 15,
    textAlign: "justify",
  },
  caixaVideo: {
    marginTop: 45,
    borderRadius: 20,
    backgroundColor: "#0F5132",
    justifyContent: "center",
    padding: 14,
    marginBottom: 50,
  },
  video: {
    width: 300,
    height: 170,
    borderRadius: 12,
  },
});