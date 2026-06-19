import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Card } from "react-bootstrap";
import {
  addToCart,
  checkout,
  clearCheckoutMessage,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import ProductImage from "../components/ProductImage";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const checkoutMessage = useSelector((state) => state.cart.checkoutMessage);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalProducts = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-start">
        <h2>Your Cart</h2>
        {checkoutMessage && (
          <Alert
            variant="success"
            dismissible
            onClose={() => dispatch(clearCheckoutMessage())}
          >
            {checkoutMessage}
          </Alert>
        )}
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="text-start">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <Card
          key={item.id}
          className="mb-3 p-3 d-flex flex-column flex-sm-row gap-3"
        >
          {/* Image */}
          <ProductImage
            src={item.image}
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
              <Button
                size="sm"
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </Button>

              <span>{item.quantity}</span>

              <Button size="sm" onClick={() => dispatch(addToCart(item))}>
                +
              </Button>

              <Button
                size="sm"
                variant="danger"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <div className="cart-summary d-flex flex-column align-items-end gap-2 mt-3 me-4">
        <h4>Total Products: {totalProducts}</h4>
        <h4>Total: ${total.toFixed(2)}</h4>
        <Button onClick={() => dispatch(checkout())}>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
