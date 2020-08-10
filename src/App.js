import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import BuySection from "./Components/BuySection";
import Cart from "./Components/Cart";
import { Row, Col, Container } from "reactstrap";


function App() {
  const [cartItem, setCardItem] = useState([]);

  const addCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      toast("Already added !", {
        type: "error",
      });
      return;
    }
    setCardItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCardItem([]);
    toast("Item purchased", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCardItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuySection addCart={addCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
