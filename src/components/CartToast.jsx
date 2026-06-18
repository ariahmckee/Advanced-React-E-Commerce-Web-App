import { Toast, ToastContainer } from "react-bootstrap";
import { useCart } from "../context/useCart";

function CartToast() {
  const { showToast, setShowToast } = useCart();

  return (
    <ToastContainer position="bottom-end" className="p-3">
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
      >
        <Toast.Body>Added to cart 🛒</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CartToast;