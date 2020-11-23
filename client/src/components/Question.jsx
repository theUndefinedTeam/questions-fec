import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AnswerDetail from './AnswerDetail.jsx'
import HelpfulQuestion from './helpfulQuestion.jsx'

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
                        <Col>
                            <AnswerDetail question={props.questions} />
                        </Col>
                    </Col>
                    <Col>
                        <HelpfulQuestion helpfulBody={props.questions} />
                    </Col>
                    <Col>
                        Add Answer
                    </Col>

                </Row>
            </Container>
        </>
    );
}
export default Question;
