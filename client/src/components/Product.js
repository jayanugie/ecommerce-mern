import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </Card.Body>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews}
          </div>
        </Card.Text>
        <Card.Text as="h3">Rp{product.price}</Card.Text>
      </Card>
    </div>
  );
};

export default Product;
