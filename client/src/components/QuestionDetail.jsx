import React, { Component, useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import getquestions from '../api/getquestions.jsx'
import Question from './Question.jsx'

const QuestionDetail = () => {

  const getAll = () => {
    return getquestions(3).then(function (obj) {
      var promises = obj.data.results.map(function (id) {
        return id
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
      {questions.length && questions.map((questions, key) => {


        console.log("<kelvin></kelvin>")
      })}
      <Question />
    </div>
  );
}

export default QuestionDetail;
