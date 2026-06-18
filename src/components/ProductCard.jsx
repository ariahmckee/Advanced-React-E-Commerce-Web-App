import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image} // fakestoreapi.com version
        // src={product.images} // changed from .image for new API (Platzi)
        className="p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>

        <Card.Text>${product.price.toFixed(2)}</Card.Text>

        {/* flex-grow pushes button down */}
        <div className="mt-auto">
          <Button
            className="m-1"
            as={Link}
            to={`/products/${product.id}`}
            variant="primary"
          >
            View
          </Button>
          <Button className="m-1" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
