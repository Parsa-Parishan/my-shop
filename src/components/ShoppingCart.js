import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useList } from "./CartContext";

export default function ShoppingCart({ handleClose }) {
  let shoppingList = useList();

  return (
    <div className="shopping-container">
      <div className="cart" style={{}}>
        <div className="added">
          <h4>ADDED TO BAG</h4>
          <span className="icon">
            <FaRegTimesCircle onClick={handleClose} />
          </span>
        </div>
        {shoppingList.map((item) => {
          return (
            <div className="shopping-list" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt="" />
              </div>
              <div className="item-detail">
                <p className="item-name">{item.name}</p>
                <p className="size">{item.size}</p>
                <p className="price">{item.price}</p>
                <input type="number" />
              </div>
            </div>
          );
        })}
        {/* <div className="shopping-list">
            <div className="item-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0660/0091/products/HELLFIRECLUB_MOCK.png?v=1657562857"
                alt=""
              />
            </div>
            <div className="item-detail">
              <p className="item-name">BCC Hell-Fire Club</p>
              <p className="size">Xsmall</p>
              <p className="price">$28.99</p>
              <input type="number" />
            </div>
        </div> */}
        <div className="checkout">
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}