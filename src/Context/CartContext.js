import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [amountProduct, setAmountProduct] = useState(null);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  const [product, setProduct] = useState();

  function addItemCart(newItem) {
    const itemIndex = cart.findIndex((item) => item.id === newItem.id);

    if (itemIndex !== -1) {
      let cartList = cart;

      cartList[itemIndex].amount = cartList[itemIndex].amount + 1;

      cartList[itemIndex].total =
        cartList[itemIndex].amount * cartList[itemIndex].price;

      setCart(cartList);
      totalResultCart(cartList);
      setAmountProduct((prevItens) => prevItens + 1);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setAmountProduct((prevItens) => prevItens + 1);
    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product) {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (cart[itemIndex]?.amount > 1) {
      let cartList = cart;

      cartList[itemIndex].amount = cartList[itemIndex].amount - 1;

      cartList[itemIndex].total =
        cartList[itemIndex].total - cartList[itemIndex].price;

      setAmountProduct((prevItens) => prevItens - 1);
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    setAmountProduct((prevItens) => prevItens - 1);
    totalResultCart(removeItem);
  }

  function totalResultCart(items) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    setTotal(result);
  }

  function productParams(id) {
    setProduct(id);

    navigation.navigate("Product");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        total,
        productParams,
        product,
        amountProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
