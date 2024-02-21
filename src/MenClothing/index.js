import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../Context/CartContext";
import Header from "../components/Header";

export default function MenClothing() {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const { productParams } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url2 =
          "https://fakestoreapi.com/products/category/men's clothing";

        const categoryResponse = await fetch(url2, {
          method: "GET",
        });

        const categoryResult = await categoryResponse.json();

        setCategoryProducts(categoryResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleProduct(id) {
    productParams(id);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
      ></TouchableOpacity>
      <ScrollView horizontal={true} style={styles.viewProducts}>
        <FlatList
          data={categoryProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProduct(item.id)}>
              <View style={styles.productCard}>
                <Text>
                  {item.title.length > 40
                    ? item.title.substring(0, 40) + "..."
                    : item.title}
                </Text>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 3000,
  },
  viewProducts: {
    margin: 13,
  },
  productCard: {
    alignItems: "center",
    marginRight: 8,
    marginBottom: 40,
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
    marginTop: 10,
  },
});
