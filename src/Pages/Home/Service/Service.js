import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,img, price, description} = service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Card.Text>
                        {description.slice(0,100)}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;