import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/useAuth";
import LoginModal from "./LoginModal";

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );
  const { isAdmin, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleHomeClick = () => {
    setExpanded(false);
    window.dispatchEvent(new Event("reset-home"));
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top" // ✅ pin to top
      className="bg-body"
    >
      <Container fluid className="px-4">
        {/* LEFT: Logo */}
        <Navbar.Brand as={Link} to="/" onClick={handleHomeClick}>
          FakeStore
        </Navbar.Brand>

        {/* RIGHT (MOBILE ONLY): Cart + Hamburger */}
        <div className="d-flex align-items-center gap-2 ms-auto d-lg-none">
          <Nav.Link as={Link} to="/cart" className="text-nowrap">
            Cart ({cartCount})
          </Nav.Link>

          <Navbar.Toggle />
        </div>

        {/* COLLAPSE */}
        <Navbar.Collapse>
          {/* LEFT: Nav links */}
          <Nav className="text-center ms-3">
            <Nav.Link as={Link} to="/" onClick={handleHomeClick}>
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </Nav.Link>

            {isAdmin && (
              <Nav.Link
                as={Link}
                to="/add-product"
                onClick={() => setExpanded(false)}
              >
                Add Product
              </Nav.Link>
            )}
          </Nav>

          {/* RIGHT (DESKTOP ONLY): Cart + Login */}
          <div className="d-none d-lg-flex align-items-center gap-3 ms-auto">
            {/* Cart (desktop version) */}
            <Nav.Link as={Link} to="/cart" className="text-nowrap">
              Cart ({cartCount})
            </Nav.Link>

            {/* Login / Logout */}
            {!isAdmin ? (
              <Button size="sm" onClick={() => setShowModal(true)}>
                Login
              </Button>
            ) : (
              <Button size="sm" onClick={logout}>
                Logout
              </Button>
            )}
          </div>

          {/* MOBILE LOGIN (inside hamburger) */}
          <div className="d-lg-none text-center mt-3">
            {!isAdmin ? (
              <Nav.Link
                onClick={() => {
                  setShowModal(true);
                  setExpanded(false);
                }}
              >
                Login
              </Nav.Link>
            ) : (
              //   <Nav.Link onClick={logout}>Logout</Nav.Link>
              <Nav.Link
                onClick={() => {
                  logout();
                  setExpanded(false);
                }}
              >
                Logout
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>

        <LoginModal show={showModal} onHide={() => setShowModal(false)} />
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
