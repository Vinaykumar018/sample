import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container>
      <Card className="welcome-card">
        <Card.Body>
          <Card.Title>Welcome to Devnati Projects</Card.Title>
          <Card.Text>
            Explore our projects and learn more about what we do.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
