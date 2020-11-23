import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import getQuestions from '../api/getQuestions.jsx';


const axios = require('axios');

const AddQuestionForm = ({
    productQuestion, show, handleClose, handleShow, setQuestions
}) => {
    const [newQuestion, setNewQuestion] = useState({
        body: '',
        name: '',
        email: '',
    });

    const handleChange = (event) => {
        const { value } = event.target;
        setNewQuestion({
            ...newQuestion,
            [event.target.name]: value,
        });
    };

    const SubmitQuestion = (event) => {
        event.preventDefault();
        axios.post(`http://52.26.193.201:3000/qa/${productQuestion}`,
            {
                body: newQuestion.body,
                name: newQuestion.name,
                email: newQuestion.email,
            },
        )
            .then(() => {
                handleClose();
                getQuestions(productQuestion)
                    .then((res) => {
                        setQuestions(res.data.results);
                        console.log(res.data.results);
                    })
                    .catch((err) => {
                        throw err;
                    });
            })
            .catch((error) => {
                throw error;
            });
    }

    return (
        <Form onSubmit={SubmitQuestion}>
            <Form.Group controlId="formBasicQuestion">
                <Form.Label>Enter Question</Form.Label>
                <Form.Control type="text" required as="textarea" placeholder="Question" maxLength="1000" name="body" value={newQuestion.body} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicName">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control required as="textarea" placeholder="Name" maxLength="60" name="name" value={newQuestion.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required as="textarea" placeholder="Enter email" maxLength="60" name="email" value={newQuestion.email} onChange={handleChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
        </Form.Text>
            </Form.Group>

            <button className="gl-aqb" type="submit" onClick={handleClose}>
                Cancel Question
      </button>
            <button className="gl-aqb" type="submit" onClick={handleClose}>
                Submit Question
      </button>
        </Form>
    );
};
export default AddQuestionForm;