import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Rating
import { numberFormat } from "../helpers";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews}
          </div>
        </Card.Text>
        <Card.Text as="h3">{numberFormat(product.price)}</Card.Text>
      </Card>
    </div>
  );
};

export default Product;
