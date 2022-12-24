import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ui_actions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleClose = () => {
    dispatch(
      ui_actions.showNotification({
        open: false,
      })
    );
  };
  return (
    <Alert onClose={handleClose}  hidden={!notification.open} severity={type}>
      {message}
    </Alert>
  );
};

export default Notification;
