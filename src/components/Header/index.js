import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/Feather";
import { CartContext } from "../../Context/CartContext";

export default function Header() {
  const navigation = useNavigation();
  const { amountProduct, cart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icons name="menu" size={30} color={"#000"} />
      </TouchableOpacity>

      <Text style={styles.headerTextName}>Welcome José</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <View>
          {amountProduct ? (
            <Text style={styles.textCart}>{amountProduct}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <Icons name="shopping-cart" size={30} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    paddingTop: 55,
    height: "20%",
    width: "100%",
    borderBottomWidth: 0.2,
    borderBottomColor: "#009",
  },
  headerTextName: {
    margin: 20,
    marginRight: 140,
    fontSize: 20,
  },
  textCart: {
    width: 12,
    color: "#fff",
    borderRadius: 3,
    alignContent: "center",
    fontSize: 15,
    padding: 2,
    backgroundColor: "#f00",
    marginLeft: 20,
    marginTop: 5,
  },
});
