import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsActions";
import { Card } from "antd";

const { Meta } = Card;

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
    //console.log(products);
    return (
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1487260211189-670c54da558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                />
              }
            >
              <Meta
                title={product.name}
                description={this.productDetails(product)}
              />
            </Card>
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
