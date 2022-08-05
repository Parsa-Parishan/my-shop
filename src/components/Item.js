import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./data";
import { useListUpdate } from "./CartContext";

const Item = () => {
  let { itemId } = useParams();
  const item = products.find((product) => product.id == itemId);
  const [checked, setChecked] = useState("xs");


  const addToCart = useListUpdate();

  const handleCheck = (e) => {
    setChecked(() => e.target.value);
    console.log(checked);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const addedItem = {
      id: item.id,
      name: item.name,
      size: checked,
      color: item.color,
      image: item.image[0],
      price: item.price,
    };
    console.log(addedItem);
    addToCart(addedItem);
  };

  const {
    name,
    availableSizes,
    price,
    color,
    material,
    countryOfOrigin,
    extraInfo,
    description,
    image,
  } = item;

  const sizeList = [];

  for (const [key, value] of Object.entries(availableSizes)) {
    sizeList.push({ key, value });
  }
  const [selected, setSelected] = useState(false);

  return (
    <div className="product">
      <div className="image-container">
        <img src={image[0]} alt={name} className="img1" />
        <img src={image[1]} alt={name} className="img2" />
        {image[2] && <img src={image[2]} alt={name} className="img3" />}
      </div>
      <div className="details">
        <h5>{name}</h5>
        <p className="price">${price}.00</p>
        <p className="color">{color}</p>
        <p className="material-countryOfOrigin">
          {material} - MADE IN THE {countryOfOrigin}
        </p>
        {extraInfo && <p className="extraInfo">{extraInfo}</p>}
        <p className="description">{description}</p>
      </div>
      <div className="shop">
        <ul className="size-list">
          <form onSubmit={handleAddToCart}>
            {sizeList.map((size) => {
              return (
                <li key={size.key}>
                  <input
                    type="radio"
                    name="size"
                    value={size.key}
                    disabled={size.value == 0 && true}
                    onClick={() => setSelected(() => true)}
                    onChange={handleCheck}
                  />
                  <label
                    htmlFor={size.key}
                    style={{ color: size.value == 0 && "gray" }}
                  >
                    {size.key.toUpperCase()}
                  </label>
                </li>
              );
            })}
            <button type="submit" className="submit-btn" disabled={!selected}>
              add to cart
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
};

export default Item;
