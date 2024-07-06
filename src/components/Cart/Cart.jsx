import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
const Cart = ({ setshowcart }) => {
  let { cartitem, cartsubtotal } = useContext(Context);
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shoppting Cart</span>
          <span className="close-btn" onClick={() => setshowcart(false)}>
            <MdClose></MdClose>
            <span className="text">Close</span>
          </span>
        </div>
        {!cartitem?.length && (
          <div className="empty-cart">
            <BsCartX></BsCartX>
            <span>No product in the cart</span>
            <button className="return-btn">Return to Shop</button>
          </div>
        )}
        {!!cartitem?.length && (
          <>
            <CartItem></CartItem>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal: </span>
                <span className="text total">${cartsubtotal}</span>
              </div>
              <div className="button">
                <button className="check-out"> Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
