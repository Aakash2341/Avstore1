import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({ productid, categoryid }) => {
  const { data } = useFetch(
    `/api/products?populate=*&[filters][id][$ne]= ${productid} &filters[categories][id]= ${categoryid}&pagination[start]=0&pagination[limit]=8`
  );
  return (
    <div className="related-product">
      <Products headingtext="Related Product" products={data}></Products>
    </div>
  );
};

export default RelatedProducts;
