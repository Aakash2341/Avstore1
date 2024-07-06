import "./Header.scss";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  const [scrolled, setscroll] = useState(false);
  const [showcart, setshowcart] = useState(false);
  const [showsearch, setshowsearch] = useState(false);
  const handscroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handscroll);
  }, []);

  const { cartcount, cartitem } = useContext(Context);

  const nagivate = useNavigate();
  return (
    <>
      <header className={`mainheader ${scrolled ? "sticky" : ""}`}>
        <div className="headercontent">
          <ul className="left">
            <li onClick={() => nagivate("/")}>Home</li>
            <li>About</li>
            <li onClick={() => nagivate("/category/")}>Categorty</li>
          </ul>
          <div className="centre" onClick={() => nagivate("/")}>
            AV_STORE
          </div>
          <div className="right">
            <TbSearch onClick={() => setshowsearch(true)} />
            <AiOutlineHeart></AiOutlineHeart>

            <span className="carticon" onClick={() => setshowcart(true)}>
              <CgShoppingCart></CgShoppingCart>
              {!!cartitem.length && <span>{cartcount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setshowcart={setshowcart}></Cart>}
      {showsearch && <Search setshowsearch={setshowsearch}></Search>}
    </>
  );
};

export default Header;
