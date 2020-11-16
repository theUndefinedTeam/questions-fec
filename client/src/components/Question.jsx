import React from 'react'
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { format, formatRelative } from 'date-fns'
const Question = (props) => {
    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <div className="gl-questions">
                            {
                                `  Q:  ${props.questions.question_body}`
                            }
                        </div>
                        <Col> <small>by  {props.questions.asker_name},  {format(new Date(props.questions.question_date), 'MMMM dd, yyyy')} </small> </Col>
                    </Col>
                    <Col>
                        <Col>
                            <div className="gl-answers">
                                {
                                    `  A:  Answer will go heere`
                                }
                            </div>
                        </Col>
                    </Col>



                </Row>
            </Container>
        </>
    );
}
export default Question;
