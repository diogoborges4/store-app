import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import List from "./src/List";
import Routes from "./src/Routes";
import { useState } from "react";
import Context from "./src/Context/CartContext";

export default function App() {
  const [productsApp, setProductsApp] = useState(["jose"]);

  return (
    <NavigationContainer>
      <Context>
        <Routes data={productsApp} />
        <StatusBar style="auto" />
      </Context>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
