import { cart_actions } from "./cart-slice";
import { ui_actions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-d508c-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json"
      );
        const data = await res.json();
        console.log(data);
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cart_actions.replaceData(cartData));
    } catch (err) {
      console.log(err);
      dispatch(
        ui_actions.showNotification({
          open: true,
          message: "Fetching failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      ui_actions.showNotification({
        open: true,
        message: "Sendig data",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-d508c-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = res.json();
      dispatch(
        ui_actions.showNotification({
          open: true,
          message: "Request sent successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        ui_actions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};
