import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";

let isFirstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //     return;
  //   }
  //   const sendRequest = async () => {
  //     dispatch(
  //       ui_actions.showNotification({
  //         open: true,
  //         message: "Sendig data",
  //         type: "warning",
  //       })
  //     );
  //     const res = await fetch(
  //       "https://redux-http-d508c-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     const data = res.json();
  //     dispatch(
  //       ui_actions.showNotification({
  //         open: true,
  //         message: "Request sent successfully",
  //         type: "success",
  //       })
  //     );
  //   };
  //   sendRequest().catch((err) => {
  //     dispatch(
  //       ui_actions.showNotification({
  //         open: true,
  //         message: "Sending request failed",
  //         type: "error",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  //OUU

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <div className="App">{isLoggedIn ? <Layout /> : <Auth />}</div>
    </>
  );
}

export default App;
