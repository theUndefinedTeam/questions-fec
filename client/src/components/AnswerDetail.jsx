import React, { Component, useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from "react-router-dom";
import getAnswers from '../api/getAnswers.jsx'
import Answer from './Answers.jsx'



const AnswerDetail = (props) => {
    let id = props.question.question_id
    const getAll = () => {
        return getAnswers(id).then(function (obj) {
            var promises = obj.data.results.map(function (question) {
                return question
            });
            return Promise.all(promises);
        });
    }
    const [Answers, setAnswers] = useState([]);
    const mappedAnswers = Answers.map((answer, i) => <Answer answer={answer} key={i} />)
    const [open, setOpen] = useState(true);
    useEffect(() => {
        getAll().then((result) => {
            setAnswers(result)
        })
    }, [id])


    return (
        <div>
            {mappedAnswers.slice(0, 2)}
            {mappedAnswers.length > 2 && (
                <Accordion>
                    <Accordion.Collapse eventKey="0">
                        <div>
                            {mappedAnswers.slice(2)}
                        </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                        className="gl-button"
                        varient="link"
                        eventKey="0"
                        onClick={() => setOpen(!open)}
                    >
                        {open && 'Load More Answers'}
                        {' '}
                        {!open && 'See Less Answers'}
                    </Accordion.Toggle>
                </Accordion>
            )}
        </div>
    );
}

export default AnswerDetail;
