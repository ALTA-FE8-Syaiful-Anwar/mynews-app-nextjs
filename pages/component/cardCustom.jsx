import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CardCustom = ({ news, handleDetail }) => {
  return (
    <Container>
        <Row xl={4} lg={4} md={2}>
            {news.map((data, index) => {
                return (
                    <div key={index}>
                        <Col>
                            <Card className="mb-3 mt-4" style={{ width: "18rem" }}>
                                <Card.Img src={data.imageUrl} height={200} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.author}</Card.Text>
                                    <Button onClick={() => handleDetail(data)} variant='info'>
                                        Read More...
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                );
            })}
        </Row>
    </Container>
  );
};

export default CardCustom;