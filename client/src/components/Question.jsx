import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { format, formatRelative } from 'date-fns'
import AnswerDetail from './AnswerDetail.jsx'

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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="gl-questions">
                            <AnswerDetail question={props.questions} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Question;
