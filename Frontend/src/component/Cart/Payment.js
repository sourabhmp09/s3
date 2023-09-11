// import React, { Fragment, useRef,useEffect } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import { Typography } from "@material-ui/core";

import {} from "@paypal/react-paypal-js";
// import axios from "axios";
import "./Payment.css";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import EventIcon from "@material-ui/icons/Event";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useNavigate } from "react-router-dom";
// import { createOrder, clearErrors } from "../../actions/orderAction";

// }
/////////////////////////
import { CLIENT_ID } from '../Config/Config'
import React, { useState, useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from 'axios';
// import { CLIENT_ID } from '../../Config/Config'
const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // console.log(orderInfo);
  // const dispatch = useDispatch();
  const alert = useAlert();
  // const stripe = useStripe();
  // const elements = useElements();
  // const payBtn = useRef(null);
  // const navigate = useNavigate();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  // const { error } = useSelector((state) => state.newOrder);

  // const paymentData = {
  //   amount: Math.round(orderInfo.totalPrice * 100),
  // };
  //    console.log( paymentData);
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  //   console.log(order);
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //   } catch (error) {}
  // };

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  // const [dt, setDt] = useState("");

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            // description: "Sunflower",
            billing_details: {
              name: user.name,
              email: user.email,
              address: {
                line1: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                postal_code: shippingInfo.pinCode,
                country: shippingInfo.country,
              },
            },
            amount: {
              currency_code: "USD",
              // value: order.totalPrice,
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  // const onError = (data, actions) => {
  //   setErrorMessage("An Error occured with your payment ");
  // };

  // if (onError) {
  //   // console.log(setErrorMessage);
  // }

  useEffect(
    () => {
      if (success) {
        alert("Payment successful!!");
        console.log("Order successful . Your order id is--", orderID);
      }
      order.paymentInfo = {
        id: orderID,
        // status: setDt.status,
      };

      //

      //   dispatch(createOrder(order))
      //   navigate(`/OrderSuccess`)
    }
    // ,[success]
  );

  return (
    <PayPalScriptProvider
      options={{
        "client-id": CLIENT_ID ,
      }}
    >
      <div>
        <div className="wrapper">
          <div className="product-info">
            <div className="product-price-btn">
              {/* <p>$20</p> */}
              <p>₹{order.totalPrice}</p>
              <br></br>
              <button
                className="buy-btn"
                type="submit"
                onClick={() => setShow(true)}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <br></br>
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;
