import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from './SearchBar.jsx'
import '../main.css';
const App = () => (
  <div>
    <body className="gl-body">
      <Container>
        <h1> Questions and Answers</h1>
        <SearchBar />
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    </body>
  </div>
);

export default App;
