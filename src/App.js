import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category1 from "./components/Home/Category/Category1";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/category" element={<Category1></Category1>}></Route>
          <Route path="/category/:id" element={<Category></Category>}></Route>
          <Route
            path="/product/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
