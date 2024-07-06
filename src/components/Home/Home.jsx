import "./Home.scss";
import Banner from "./Banner/Banner";
import Category1 from "./Category/Category1";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setcategories, products, setproducts } =
    useContext(Context);
  useEffect(() => {
    getcategories();
    getproducts();
  }, []);

  const getcategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setcategories(res);
    });
  };
  const getproducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setproducts(res);
    });
  };
  return (
    <div>
      <Banner></Banner>
      <div className="main-content">
        <div className="layout">
          <Category1 categories={categories}></Category1>
          <Products
            products={products}
            headingtext="Popular Product"
          ></Products>
        </div>
      </div>
    </div>
  );
};

export default Home;
