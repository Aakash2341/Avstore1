import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";
const Category1 = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category1;
