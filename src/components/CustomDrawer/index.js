import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("../../../assets/favicon.png")}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 18, marginTop: 14 }}>Welcome</Text>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 14,
            paddingHorizontal: 20,
          }}
          numberOfLines={1}
        ></Text>
      </View>

      <DrawerItemList {...props} />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>
          Categories
        </Text>

        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            style={styles.btnDrawer}
            onPress={() => navigation.navigate("MenClothing")}
          >
            <Text style={styles.txtDrawer}>Men's Clothing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnDrawer}
            onPress={() => navigation.navigate("WomenClothing")}
          >
            <Text style={styles.txtDrawer}>Women's Clothing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  btnDrawer: {
    margin: 4,
    backgroundColor: "#f0f2ff",
    width: 255,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
  },
  txtDrawer: {
    marginLeft: 8,
  },
});
