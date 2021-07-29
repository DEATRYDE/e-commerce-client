import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import Product from "../general/Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.products.products) {
      const products = nextProps.products.products;
      this.setState({ products });
    }
  }

  productDetails = (product) => {
    return (
      <ul>
        <li>${product.price}</li>
        <li>Quantity:{product.quantity}</li>
        <li>{product.description}</li>
      </ul>
    );
  };

  render() {
    const { products } = this.state;
    // console.log(products);
    return (
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Product
              key={index}
              link={`products/${product._id}`}
              product={product}
              description={this.productDetails(product)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
