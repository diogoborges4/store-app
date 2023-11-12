import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import List from "../List";
import Cart from "../Cart";

const RouteNavigation = createNativeStackNavigator();

export default function Routes({ data }) {
  return (
    <RouteNavigation.Navigator>
      <RouteNavigation.Screen name="List" component={List} />

      <RouteNavigation.Screen name="Cart" component={Cart} />
    </RouteNavigation.Navigator>
  );
}
