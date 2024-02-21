import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Drawer from "./src/Routes/Drawer";
import Context from "./src/Context/CartContext";
import StackRoute from "./src/Routes/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <Context>
        <StackRoute />
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
