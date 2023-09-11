import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer ,productDetailsReducer, newProductReducer, productReducer, productReviewsReducer,reviewReducer, newReviewReducer} from "./reducers/productReducer";

import { userReducer ,profileReducer,forgotPasswordReducer, allUsersReducer, userDetailsReducer, } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, orderReducer ,orderDetailsReducer, myOrdersReducer} from "./reducers/orderReducer";

const reducer = combineReducers({
products:productsReducer,
productDetails:productDetailsReducer,
user:userReducer,
profile:profileReducer,
forgotPassword: forgotPasswordReducer,
cart:cartReducer,
newProduct:newProductReducer,
product:productReducer,
allUsers:allUsersReducer,
userDetails: userDetailsReducer,
productReviews: productReviewsReducer,
review: reviewReducer,
allOrders:allOrdersReducer,
myOrders:myOrdersReducer,
order: orderReducer,
orderDetails: orderDetailsReducer,
newReview: newReviewReducer,
review: reviewReducer,
productReviews: productReviewsReducer


});
//  "proxy": "http://localhost:4000/",
//,"proxy": "http://192.168.43.171:4000 "
// let initialState = {
  
// };

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

