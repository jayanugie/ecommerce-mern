import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomePage = () => {
  return (
    <>
      <h1 className="mt-3">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col>
            <Product sm={12} md={6} lg={4} xl={3} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
