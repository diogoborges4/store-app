import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigation = createNativeStackNavigator();

import { View } from "react-native";
import Routes from "./Drawer";
import ProductCard from "../ProductCard";
import MenClothing from "../MenClothing";
import WomenClothing from "../WomenClothing";

export default function StackRoute() {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        name="Drawer"
        component={Routes}
        options={{ headerShown: false }}
      />

      <StackNavigation.Screen
        options={{
          title: "Men's Clothing",
        }}
        name="MenClothing"
        component={MenClothing}
      />

      <StackNavigation.Screen
        options={{
          title: "Women's Clothing",
        }}
        name="WomenClothing"
        component={WomenClothing}
      />
    </StackNavigation.Navigator>
  );
}
