import React from 'react';
import {
  Card, CardImg, CardText, CardBody,CardHeader,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
  const {name,category,description,quantity} = props.product
  return (
    <div>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardImg top width="100%" src="/assets/318x180svg" alt="Card image cap" />
        <CardBody>
        {quantity <= 0  && <p>Out of Stock</p>}
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <CardText>{quantity}</CardText>

          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;