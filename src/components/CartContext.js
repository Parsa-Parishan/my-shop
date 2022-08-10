import React, { useContext, useState } from "react";

const ListContext = React.createContext();
const ListUpdateContext = React.createContext();
const RemoveContext = React.createContext();

export function useList() {
  return useContext(ListContext);
}

export function useListUpdate() {
  return useContext(ListUpdateContext);
}

export function useRemove() {
  return useContext(RemoveContext);
}

export default function CartContext({ children }) {
  // const [quantity, setQuantity] = useState(1);

  const sample = {
    id: 0,
    name: "BCC Hell-Fire Club",
    size: "Xsmall",
    image:
      "https://cdn.shopify.com/s/files/1/0660/0091/products/HELLFIRECLUB_MOCK.png?v=1657562857",
    price: "28,99",
    qty: 1,
  };

  const [shoppingList, setShoppingList] = useState([sample]);

  const addToCart = (item) => {
    // item.qty = quantity;
    let index = shoppingList.findIndex(
      (e) => e.id == item.id && e.size == item.size
    );
    if (index > -1) {
      shoppingList[index].qty += 1;
      setShoppingList(() => shoppingList);
    } else {
      setShoppingList(() => [item, ...shoppingList]);
    }
  };

  const removeItem = (item) => {
    setShoppingList((shoppingList) => {
      shoppingList.filter(
        (product) => product.id != item.id && product.size != item.size
      );
    });
  };

  console.log(shoppingList);

  return (
    <ListContext.Provider value={shoppingList}>
      <ListUpdateContext.Provider value={addToCart}>
        <RemoveContext.Provider value={removeItem}>
          {children}
        </RemoveContext.Provider>
      </ListUpdateContext.Provider>
    </ListContext.Provider>
  );
}
