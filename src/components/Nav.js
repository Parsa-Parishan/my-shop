import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingBag,
  FaBars,
  FaRegTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useList } from "../contexts/CartContext";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [prev, setPrev] = useState(0);

  //**** Hide Header on Scroll Down Show on Scroll Up ****//
  const navOnScroll = () => {
    let current = window.pageYOffset;
    setPrev(() => window.pageYOffset);
    if (current > prev && current > 100) {
      setShowNav(() => false);
    } else if (current < prev || current == 0) {
      setShowNav(() => true);
    }
  };

  window.addEventListener("scroll", navOnScroll);

  //NUMBER OF ITEMS IN SHOPPING CART
  const numberOfItems = useList();

  //HANDLE SHOPPING CART
  const handleClose = (e) => {
    e.preventDefault();
    if (!close) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setClose(() => !close);
  };

  //HANDLE NAV
  const handleToggle = (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      if (!show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      setShow(() => !show);
    }
  };

  //SET BODY OVERFLOW PROPERTY TO AUTO WHEN PAGE CHANGES
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const handleOverflow = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <nav className={showNav ? "scroll-nav" : undefined}>
      <Link to="/my-shop" className="logo">
        Soseki
      </Link>
      {close && <ShoppingCart handleClose={handleClose} />}
      <div className="nav-wrapper">
        <ul className={`nav ${show && "slide-nav"}`}>
          <FaRegTimesCircle className="close" onClick={handleToggle} />
          <li>
            <Link to="products" onClick={() => handleOverflow}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="about" onClick={() => handleOverflow}>
              About Us
            </Link>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <ul className="utilities">
        <li>
          <a>
            <FaSearch />
          </a>
          <Link to="login">
            <FaUserAlt />
          </Link>
          <a href="#" className="shopping-cart">
            <FaShoppingBag onClick={handleClose} />
            {numberOfItems.length > 0 ? (
              <span>{numberOfItems.length}</span>
            ) : undefined}
          </a>
          <a href="#" className="show-nav" onClick={handleToggle}>
            <FaBars />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
