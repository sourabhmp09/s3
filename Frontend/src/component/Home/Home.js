
/////////////////////////////////////////////////////////////////
///////////////////////////////////////////5:41:53
import React, { Fragment, useEffect } from 'react';
import "./Home.css"
// import shirtimag from "../../images/shirtimag.jpg"
import { CgMouse } from "react-icons/cg"
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';

const Home = () => {
// const product = {
//   name: "shirt",
//   price: "500",
//   _id: "sourabh",
//   images: [{ url: "" }]

// }
  const dispatch = useDispatch();

const {  products } = useSelector((state) => state.products);

  useEffect(() => {

    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {/* /// ye old tha */}
        {/* <Product product={product} /> */}
        {products &&products.map((product,i) => 
                <Product  product={product} key={i}/>
              ) }
      </div>
    </Fragment>

  )
}
export default Home;
////////////////////////////////////////////////////////////////////////////////////////
// ////////////////5:55:29 add error
