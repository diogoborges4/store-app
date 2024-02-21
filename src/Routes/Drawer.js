import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import List from "../List";
import Cart from "../Cart";
import ProductCard from "../ProductCard";
import CustomDrawer from "../components/CustomDrawer";

const RouteNavigation = createDrawerNavigator();
const StackNavigation = createNativeStackNavigator();

export default function Routes() {
  return (
    <RouteNavigation.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#fff",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#3b3dbf",
        drawerActiveTintColor: "#fff",

        drawerInactiveBackgroundColor: "#f0f2ff",
        drawerInactiveTintColor: "#121212",
      }}
    >
      <RouteNavigation.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
        name="List"
        component={List}
      />

      <StackNavigation.Screen
        options={{
          headerShown: false,
        }}
        name="Product"
        component={ProductCard}
      />

      <RouteNavigation.Screen name="Cart" component={Cart} />
    </RouteNavigation.Navigator>
  );
}
