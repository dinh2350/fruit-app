import Product from "../product/Product";
import "./style/products.style.css";

const Products = () => {
  return (
    <div className="products">
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
