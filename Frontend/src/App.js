// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "./App.css";
import React, { Fragment, useEffect } from "react";
// import ReactDOM from "react-dom";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.js";
import Header from "./component/layout/Header/Header";
import ProductDetails from "./component/Product/ProductDetails";
// import { useParams } from "react-router-dom";

import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import WebFont from "webfontloader";
// import { isAuthenticatedUser } from '../../backend/middleware/auth';
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import Cart from "./component/Cart/Cart";
import Payment from "./component/Cart/Payment";
import Dashboard from "./component/Admin/Dashboard.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ResetPassword from "./component/User/ResetPassword";
import ForgotPassword from "./component/User/ForgotPassword";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import MyOrders from "./component/Order/MyOrders";
import OrderList from "./component/Admin/OrderList";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import ProcessOrder from "./component/Admin/ProcessOrder";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
function App() {
  // id{id } niche
  // const { id } = useParams();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // useEffect(()=>{
  //   store.dispatch(loadUser())
  // })

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Roboto", "Droid Sans", "Chilanka"],
  //     },
  //   })
  return (
    // <Header />
    <BrowserRouter>
      <Fragment>
        <Header /> {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route  exact path="/prouduct/:id" componenet={ProductDetails}/> */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* <Route exact path="/product/:id" component={ProductDetails} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/account" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/me/update" element={<UpdateProfile />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/password/update" element={<UpdatePassword />} />
          </Route>

          <Route path="/password/forgot" element={<ForgotPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/login/shipping" element={<Shipping />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/order/confirm" element={<ConfirmOrder />} />
          </Route>

          <Route path="/process/payment" element={<Payment />} />

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/products" element={<ProductList />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/product" element={<NewProduct />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/products" element={<ProductList />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/product/:id" element={<UpdateProduct />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/orders" element={<OrderList />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/order/:id" element={<ProcessOrder />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<MyOrders />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/users" element={<UsersList />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/user/:id" element={<UpdateUser />} />
          </Route>

          <Route element={<ProtectedRoute isAdmin={true} />}>
            <Route path="/admin/reviews" element={<ProductReviews />} />
          </Route>

          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
