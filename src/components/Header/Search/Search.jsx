import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setshowsearch }) => {
  const nagivate = useNavigate();

  const [query, setquery] = useState("");

  const onChange = (e) => {
    setquery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains] = ${query}`
  );
  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-nodal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="SEARCH FOR PRODUCT"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setshowsearch(false)}></MdClose>
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                nagivate("/product/" + item.id);
                setshowsearch(false);
              }}
            >
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
                <span className="desc">{item.attributes.disc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
