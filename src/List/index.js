import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Button, FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { CartContext } from "../Context/CartContext";

export default function List({ data }) {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const productsList = [
    {
      id: "1",
      name: "coca-cola",
      price: 12.0,
    },
    {
      id: "2",
      name: "chocolate",
      price: 6.0,
    },
    {
      id: "3",
      name: "queijo",
      price: 7.99,
    },
    {
      id: "4",
      name: "batata",
      price: 5.99,
    },
    {
      id: "5",
      name: "Guarana",
      price: 4.99,
    },
  ];

  function handleAdd(item) {
    addItemCart(item);
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Text>cart</Text>
      </TouchableOpacity>
      <FlatList
        data={productsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Adicionar" onPress={() => handleAdd(item)} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
