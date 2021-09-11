import React from "react";
import { Card, Button } from "antd";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Product = ({ product, description, buttonName, link }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Link to={link}>
        <Card
          hoverable
          style={{ maxWidth: 330 }}
          cover={
            <img
              alt="example"
              src="https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg"
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
  description: propTypes.object.isRequired,
  buttonName: propTypes.string,
};

export default Product;
