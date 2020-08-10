import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";

const CardItem = ({ products, addInCart }) => {

    return (
        <Card className="mt-2 mb-1">
            <CardImg
                top
                height="250"
                width="100%"
                src={products.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{products.productName}</CardTitle>
                <CardText className="secondary">Price:{products.productPrice}</CardText>
                <Button color="info" onClick={() => addInCart(products)}>
                    BuyNow
                </Button>
            </CardBody>
        </Card>
    )
}

export default CardItem;
