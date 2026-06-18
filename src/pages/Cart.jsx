import { useCart } from "../context/useCart";
import { Button, Card } from "react-bootstrap";

function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>so much empty 😭</p>;

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <Card
          key={item.id}
          className="mb-3 p-3 d-flex flex-column flex-sm-row gap-3"
        >
          {/* Image */}
          <img
            // src={item.image}
            src={item.images} // updated from .image for new API
            alt={item.title}
            style={{
              height: "80px",
              width: "80px",
              objectFit: "contain",
            }}
          />

          {/* Main content */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* TOP ROW: title + price */}
            <div className="d-flex justify-content-between align-items-start">
              <h5 className="mb-1 text-start">{item.title}</h5>

              <h5 className="mb-1 ms-4 fw-semibold text-nowrap">
                ${item.price.toFixed(2)}
              </h5>
            </div>

            {/* BOTTOM ROW: controls */}
            <div className="d-flex justify-content-end gap-2 mt-2">
              <Button size="sm" onClick={() => decreaseQty(item.id)}>
                -
              </Button>

              <span>{item.quantity}</span>

              <Button size="sm" onClick={() => addToCart(item)}>
                +
              </Button>

              <Button
                size="sm"
                variant="danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <div className="d-flex justify-content-end mt-3 me-4">
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Cart;
