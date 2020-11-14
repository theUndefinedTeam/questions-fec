import React, { Component, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import getquestions from '../api/getquestions.jsx'
import Question from './Question.jsx'



const QuestionDetail = (props) => {
  let { id } = useParams();
  console.log(id)
  const getAll = () => {
    return getquestions(id).then(function (obj) {
      var promises = obj.data.results.map(function (question) {
        return question
      });
      return Promise.all(promises);
    });
  }
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    getAll().then((result) => {
      setQuestions(result)
    })
  }, [])
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);

  return (
    <div>
      {questions.length && questions.map((questions, key) => (
        < Question questions={questions} key={key} />
      ))}
    </div>
  );
}

export default QuestionDetail;
