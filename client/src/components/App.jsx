import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from './SearchBar.jsx';
import QuestionDetail from './QuestionDetail.jsx'
import { HashRouter, Route } from "react-router-dom";
import NotFound from './NotFound.jsx';

import '../main.css';
const App = () => (
  <div>
    <body className="gl-body">
      <HashRouter>
        <Container>
          <h1> Questions and Answers</h1>
          <SearchBar />
          <Row>
            <Col>
              <Route path="/:productId" children={<QuestionDetail />} />
            </Col>
          </Row>
        </Container>
      </HashRouter>
    </body>
  </div>
);

export default App;
