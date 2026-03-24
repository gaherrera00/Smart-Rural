import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Sobre from "./telas/Sobre";

const Tab = createBottomTabNavigator();
function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = "Sobre";

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
    alignItems: "center",
    justifyContent: "center",
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
});
