import "./SingleProduct.scss";
import { useParams } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id] = ${id}`);

  const [quantity, setquantity] = useState(1);
  const { handleaddtocart } = useContext(Context);
  const increment = () => {
    setquantity((prev) => prev + 1);
  };
  const decrement = () => {
    setquantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  if (!data) return;
  const product = data.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">${product.price}</span>
            <span className="product-des">{product.disc}</span>

            <div className="cart-button">
              <div className="quantity-buttons">
                <span className="c1" onClick={decrement}>
                  -
                </span>
                <span className="c1">{quantity}</span>
                <span className="c1" onClick={increment}>
                  +
                </span>
              </div>
              <button
                className="add-to-card-button"
                onClick={() => {
                  handleaddtocart(data.data[0], quantity);
                  setquantity(1);
                }}
              >
                <FaCartPlus size={20}></FaCartPlus>
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>

            <div className="info-item">
              <span className="text-bold">
                Category :
                <span> {product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share :
                <span className="social-icons">
                  {" "}
                  <FaFacebookF size={16}></FaFacebookF>
                  <FaTwitter size={16}></FaTwitter>
                  <FaInstagram size={16}></FaInstagram>
                  <FaLinkedin size={16}></FaLinkedin>
                  <FaPinterest size={16}></FaPinterest>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productid={id}
          categoryid={product.categories.data[0].id}
        ></RelatedProducts>
      </div>
    </div>
  );
};

export default SingleProduct;
