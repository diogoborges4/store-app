import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
  const [value, setVallue] = useState([]);

  function handleAdd(item) {
    addItemCart(item);
    setVallue((lastValue) => [...lastValue, 1]);
  }

  function handleRemove(item) {
    removeItemCart(item);
    setVallue((lastValue) => [...lastValue, -1]);
  }

  useEffect(() => {}, [value]);

  return (
    <View>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
            </View>

            <View style={styles.amountContainer}>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleRemove(item)}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={styles.amount}>{item.amount}</Text>

              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => handleAdd(item)}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <Text style={{ fontSize: 16, marginLeft: "35%", marginBottom: 30 }}>
            Total: R$ {total}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "#168fff",
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 2,
  },
  amount: {
    marginLeft: 14,
    marginRight: 14,
  },
});
