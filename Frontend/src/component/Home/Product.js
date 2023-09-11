
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStar from "react-rating-stars-component"

const Product = ({ product }) => {
  // const {
    
  //  } = useParams();
  
  const options = {
  //   value: product.ratings,
  // edit: false,
  // color: "green",
  // activrColor: "tomato",
  // value: product.ratings,
  // size: window.innerWidth < 600 ? 20 : 25,
  // isHalf: true
  value: product.ratings,
  readOnly: true,
  precision: 0.5,
};

  return (


    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.category}</p>
      <div>
        <ReactStar {...options} />
        <span>({product.numOfReviews}Rewivew)</span>/

      </div>
      <span>{`₹${product.price}`}</span>
    </Link>


  )
}

export default Product