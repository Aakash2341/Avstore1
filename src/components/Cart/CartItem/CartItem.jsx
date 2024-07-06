import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
import Product from "../../Products/Product/Product";
const CartItem = () => {
  const { cartitem, handlecartproductquantity, handleremovecart } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartitem.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => {
                handleremovecart(item);
              }}
            ></MdClose>
            <div className="quantity-buttons">
              <span
                className="c1"
                onClick={() => handlecartproductquantity("dec", item)}
              >
                -
              </span>
              <span className="c1">{item.attributes.quantity}</span>
              <span
                className="c1"
                onClick={() => handlecartproductquantity("inc", item)}
              >
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                ${item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
