import { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartContext } from "../Context/CartContext";
import Icons from "react-native-vector-icons/Feather";
import Header from "../components/Header";

export default function ProductCard() {
  const { cart, addItemCart, product } = useContext(CartContext);
  const [productCard, setProductCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${product}`;

        const response = await fetch(url, {
          method: "GET", // Método da solicitação (pode ser GET, POST, etc.)
        });

        const result = await response.json();
        setProductCard(result);
        setLoading(false);
        console.log(productCard);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(true);
    fetchData();
  }, [product]);

  function handleAddProduct(id) {
    addItemCart(id);
  }

  return (
    <View style={styles.viewProduct}>
      <Header />

      {loading ? (
        <ActivityIndicator
          style={styles.loading}
          size={"large"}
          color={"#215673"}
        />
      ) : (
        <View style={styles.productCard}>
          <Text style={{ fontWeight: "500", fontSize: 17 }}>
            {productCard.title}
          </Text>
          <Image source={{ uri: productCard.image }} style={styles.image} />
          <Text style={{ marginStart: -300, fontSize: 18 }}>
            R$ {productCard.price}
          </Text>
          <View style={styles.mainProductCard}>
            <TouchableOpacity
              style={styles.btnAddCart}
              onPress={() => handleAddProduct(productCard)}
            >
              <Text style={{ fontSize: 17, color: "#fff" }}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHeart}>
              <Icons name="heart" size={30} color={"#f00"} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>{productCard.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  viewProduct: {
    flex: 1,
    height: 3000,
  },
  productCard: {
    alignItems: "center",
    marginRight: 8,
    marginBottom: 40,
    margin: 13,
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  btnAddCart: {
    width: 150,
    height: 50,
    backgroundColor: "#215673",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: -10,
  },
  mainProductCard: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  btnHeart: {
    marginLeft: 12,
  },
  loading: {
    width: 200,
    height: 200,
    marginLeft: "25%",
    marginTop: 100,
  },
});
