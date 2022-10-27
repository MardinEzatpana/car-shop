import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import basket from "../assets/basket.svg";
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <img src={basket} alt="basket" />
          {cartQuantity > 0 && (
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "20px",
              height: "20px",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(-50%, -120%)",
            }}
          >
            {cartQuantity}
          </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
