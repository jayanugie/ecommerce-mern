import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

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
