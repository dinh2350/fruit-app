import Products from "../products/Products";
import "./style/discount.style.css";

const Discount = () => {
  return (
    <div className="discount container">
      <p className="discount-intro text-primary text-center ">
        MENU YANG MEMBUATMU JATUH CINTA
      </p>
      <h1 className="text-center discount-title">
        ENJOY THE BEST MENU AND GET <br />
        <span className="text-primary">DISCOUNTS</span> AVAILABLE
      </h1>
      <div className="discount-products">
        <Products />
      </div>
    </div>
  );
};

export default Discount;
