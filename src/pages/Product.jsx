import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

function Product() {
  return (
    <div>
    <PageNav current={2}/>
      <h1>Product</h1>
      <PageFooter/>
    </div>
  );
}

export default Product;