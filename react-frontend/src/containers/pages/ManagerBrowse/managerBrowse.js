import "./managerBrowse.css";
import * as React from "react";

import ProductRow from "../../components/productRow";

class ManagerBrowse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: Array(0),
    };
  }

  componentDidMount() {
    getProductData().then((productData) =>
      this.setState({ productData: productData })
    );
    console.log(this.state.productData);
  }

  render() {
    let productData = this.state.productData;
    let items = productData.map((itemData) => {
      return (
        <ProductRow productName={itemData.ProductName} stock="0"></ProductRow>
      );
    });
    return (
      <div>
        <div className="title">Edit/Delete Products</div>
        <div>{items}</div>
      </div>
    );
  }
}

const getProductData = async () => {
  let response = await fetch("/api/get-all-products");
  let data = await response.json();
  return data;
};

export default ManagerBrowse;
