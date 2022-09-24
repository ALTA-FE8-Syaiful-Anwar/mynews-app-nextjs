import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Router from 'next/router';

const index = () => {
  const [name, setName] = useState("");

  const handleHome = () => {
    Router.push({
      pathname: "/dashboard",
      query: {
        name: name,
      },
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
      <Card style={{ width: '25rem' }} className="card">
        <div>
          <h1>Welcome</h1>
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted">
                Hot News Today!
              </Form.Text>
            </Form.Group>
          </Form>
          <Button onClick={() => handleHome()} type="submit" variant='info'>
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default index;