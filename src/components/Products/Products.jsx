import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ products, innerpage, headingtext }) => {
  return (
    <div className="products-container">
      {innerpage != true && <div className="sec-heading">{headingtext}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
