import React, { Component, Fragment } from "react";
import { getProduct } from "../../actions/productsActions";
import { connect } from "react-redux";
import { Spin, Space, Button, Rate, Modal, Alert } from "antd";
import NavBar from "../general/NavBar";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      visible: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      const product = nextProps.product;
      this.setState({ product });
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  registerModal = (product) => {
    return (
      <Modal
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div>
          <br />
          <Alert
            message={
              <center>
                <span>
                  <strong>Added</strong> {product.name} to Cart
                </span>
              </center>
            }
            type="success"
          />
          <br />
          <center>
            <Link to="/cart?redirect=/cart">
              <Button key="submit" type="primary">
                Go to Cart
              </Button>
            </Link>
          </center>
        </div>
      </Modal>
    );
  };

  render() {
    const { product } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          {product ? (
            <Fragment>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <img src="/assests/images/eshop.jpg" alt="product" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <h1 style={{ margin: 0 }}>{product.name}</h1>
                  <p className="lead" style={{ margin: 0 }}>
                    Description: {product.description}
                  </p>
                  <p className="lead" style={{ margin: 0 }}>
                    Features:
                  </p>
                  <ul
                    style={{
                      marginLeft: "10%",
                      marginTop: "0",
                      listStyle: "circle",
                    }}
                  >
                    {product.features.map((feature, index) => {
                      return <li key={index}>{feature}</li>;
                    })}
                  </ul>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={2.5}
                    style={{ margin: 0 }}
                  />
                  <p className="lead" style={{ margin: 0 }}>
                    Quantity: {product.quantity}
                  </p>
                  <h1>${product.price}</h1>
                  <Button type="primary" onClick={this.showModal}>
                    Add to Cart
                  </Button>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h1>Product Details</h1>
              <p className="lead">
                <b>{product.details}</b>
              </p>
              <p className="lead" style={{ margin: 0 }}>
                Main Features of Product
              </p>
              <ul
                style={{
                  marginLeft: "10%",
                  marginTop: "0",
                  listStyle: "circle",
                }}
              >
                {product.features.map((feature, index) => {
                  return <li key={index}>{feature}</li>;
                })}
              </ul>
            </Fragment>
          ) : (
            <Space size="middle">
              <Spin size="large" tip="Loading..." />
            </Space>
          )}
        </div>
        {product && this.registerModal(product)}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.products.product,
});

export default connect(mapStateToProps, {
  getProduct,
})(ProductDetails);
