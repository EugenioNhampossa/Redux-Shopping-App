import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_actions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartVisibility = () => {
    dispatch(cart_actions.showCart());
  };
  return (
    <div className="cartIcon" onClick={toggleCartVisibility}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
