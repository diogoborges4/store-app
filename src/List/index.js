import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import { CartContext } from "../Context/CartContext";
import key from "../services";
import Header from "../components/Header";

export default function List() {
  const { cart, addItemCart, productParams, product } = useContext(CartContext);
  const navigation = useNavigation();

  const [fakeProducts, setFakeProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url2 = "https://fakestoreapi.com/products/category/jewelery";

        const url3 = "https://fakestoreapi.com/products/category/electronics";

        const categoryResponse = await fetch(url2, {
          method: "GET",
        });

        const categoryResponse2 = await fetch(url3, {
          method: "GET",
        });

        const categoryResult = await categoryResponse.json();
        const categoryResult2 = await categoryResponse2.json();

        setCategoryProducts(categoryResult);
        setFakeProducts(categoryResult2);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [product]);

  function handleProduct(id) {
    productParams(id);
  }

  return (
    <View style={styles.container}>
      <Header />

      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size={"large"}
          color={"#215673"}
        />
      ) : (
        <ScrollView style={styles.viewProducts}>
          <View>
            <FlatList
              horizontal={true}
              data={fakeProducts}
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

            <ScrollView horizontal={true}>
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
        </ScrollView>
      )}
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
  loading: {
    width: 200,
    height: 200,
    marginLeft: "25%",
    marginTop: 100,
  },
});
