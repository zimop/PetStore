import "./managerBrowse.css";
import * as React from "react";

import ProductRow from "../../components/productRow";

import { Navigate } from "react-router-dom";

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
    if (!this.props.token) {
      return <Navigate to="/login" />;
    } else if (!this.props.token.isManager) {
      return <Navigate to="/insufficient-access" />;
    }
    let productData = this.state.productData;
    let items = productData.map((itemData) => {
      return (
        <ProductRow
          ProductId={itemData.ProductId}
          productName={itemData.ProductName}
          stock={itemData.Stock}
          token={this.props.token}
        ></ProductRow>
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
