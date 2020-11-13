import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBar from './SearchBar.jsx';
import getquestion from '../api/getquestions.jsx'
import QuestionDetail from './QuestionDetail.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../main.css';
const App = () => (
  <div>
    <body className="gl-body">
      <Router>
        <Container>
          <h1> Questions an Answer</h1>
          <SearchBar />
          <Row>
            <Col>
              <QuestionDetail />
            </Col>
          </Row>
        </Container>
      </Router>
    </body>
  </div>
);

export default App;
