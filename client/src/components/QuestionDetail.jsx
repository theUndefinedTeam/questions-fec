import React, { Component, useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from "react-router-dom";
import getquestions from '../api/getquestions.jsx'
import Question from './Question.jsx'
import AddQuestion from './addQuestion.jsx'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//sds

const QuestionDetail = (props) => {
  let { productId } = useParams();
  const getAll = () => {
    return getquestions(productId).then(function (obj) {
      var promises = obj.data.results.map(function (question) {
        return question
      });
      return Promise.all(promises);
    });
  }
  const [questions, setQuestions] = useState([]);
  const mappedQuestions = questions.map((questions, i) => <Question questions={questions} key={i} />)
  const [open, setOpen] = useState(true);
  useEffect(() => {
    getAll().then((result) => {
      setQuestions(result)
    })
  }, [productId])
  const slicedMap = mappedQuestions.slice(0, 2)

  return (
    <div>
      {slicedMap}
      {mappedQuestions.length > 2 && (
        <Accordion>
          <Accordion.Collapse eventKey="0">
            <div>
              {slicedMap}
            </div>
          </Accordion.Collapse>
          <Accordion.Toggle
            className="gl-button"
            varient="link"
            eventKey="0"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Load more questions' : 'See Less Questions'}
          </Accordion.Toggle>
        </Accordion>
      )}
      <div className="col-sm-auto">
        <AddQuestion
          productQuestion={productId}
          setQuestions={setQuestions}
        />
      </div>
    </div>
  );
}

export default QuestionDetail;
