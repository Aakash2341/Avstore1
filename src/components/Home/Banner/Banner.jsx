import "./Banner.scss";
import BannerImg from "/Users/HP/Desktop/ecomar website/client/src/assets/banner-img.png";
const Banner = () => {
  return (
    <div className=" herobanner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            necessitatibus, placeat commodi, maxime optio eaque vitae accusamus,
            consectetur vero nobis quis asperiores provident. Rerum
          </p>
          <div className="ctas">
            <div className="banner-ctas">Read More</div>
            <div className="banner-ctas v2"> Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt=" " />
      </div>
    </div>
  );
};

export default Banner;
