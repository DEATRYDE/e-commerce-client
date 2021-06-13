import React from "react";
import { Card, Button } from "antd";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Product = ({ product, description, buttonName }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Link to="#">
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1487260211189-670c54da558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
          }
        >
          <Meta title={product.name} description={description} />
          <Button type="primary">{buttonName}</Button>
        </Card>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.object.isRequired,
  description: propTypes.func.isRequired,
  buttonName: propTypes.string,
};

export default Product;
