import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../general/Product";
import { getProducts } from "../../../actions/productsActions";
import { decodeUser } from "../../../util";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantProducts: [],
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps &&
      nextProps.products &&
      nextProps.products.products.length > 0
    ) {
      const userId = decodeUser().user.id;
      let merchantProducts = [];
      merchantProducts = nextProps.products.products.filter(
        (product) => product.userId === userId
      );
      this.setState({ merchantProducts });
    }
  }

  productDetails = (product) => {
    return (
      <ul>
        <li>${product.price}</li>
        <li>quantity:{product.quantity}</li>
      </ul>
    );
  };
  render() {
    const { merchantProducts } = this.state;
    return (
      <div className="row">
        {merchantProducts.map((product, index) => (
          <Product
            key={index}
            product={product}
            description={this.productDetails(product)}
            buttonName="Add Image"
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, { getProducts })(Products);
