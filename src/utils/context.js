import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setproducts] = useState();
  const [cartitem, setcartitem] = useState([]);
  const [cartcount, setcartcount] = useState(0);
  const [cartsubtotal, setcartsubtotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;

    cartitem.map((item) => (count += item.attributes.quantity));
    setcartcount(count);

    let subtotal = 0;
    cartitem.map(
      (item) => (subtotal += item.attributes.price * item.attributes.quantity)
    );
    setcartsubtotal(subtotal);
  }, [cartitem]);

  const handleaddtocart = (product, quantity) => {
    let items = [...cartitem];
    let index = items.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setcartitem(items);
  };

  const handleremovecart = (product) => {
    let items = [...cartitem];
    items = items.filter((p) => p.id !== product.id);
    setcartitem(items);
  };

  const handlecartproductquantity = (type, product) => {
    let items = [...cartitem];
    let index = items.findIndex((p) => p.id === product.id);

    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setcartitem(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setproducts,
        cartitem,
        setcartitem,
        cartcount,
        setcartcount,
        cartsubtotal,
        setcartsubtotal,
        handleaddtocart,
        handlecartproductquantity,
        handleremovecart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
