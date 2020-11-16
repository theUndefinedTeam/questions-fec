import React, { Component, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getquestions from '../api/getquestions.jsx'
import Question from './Question.jsx'

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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAll().then((result) => {
      setQuestions(result)
    })
  }, [productId])


  return (
    <div>
      {questions.length && mappedQuestions}
    </div>
  );
}

export default QuestionDetail;
