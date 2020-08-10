import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardItem from "./CardItem"

import { random, commerce } from "faker";
import { Container, Row, Col } from "reactstrap";

const BuySection = ({ addCart }) => {
  const apiKey = "563492ad6f9170000100000107b46d8c3d7c48cda538d23ee11e271c";
  const url = "https://api.pexels.com/v1/search?query=coffee";
  const [products, setProducts] = useState([]);

  const fetchPhotos = () => {
    Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => {
        const { data } = res;
        const { photos } = data;
        const allProduct = photos.map((photo) => ({
          smallImage: photo.src.medium,
          tinyImage: photo.src.tiny,
          productName: random.word(),
          productPrice: commerce.price(),
          id: random.uuid(),
        }));
        setProducts(allProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container>
      <h1 className=" text-success text-center">Buy Page</h1>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem products={product} addInCart={addCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuySection;
