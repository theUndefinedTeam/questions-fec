import React from 'react'
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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

                        </Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <div className="gl-answers">
                            {
                                `  A:  Answer will go heere`
                            }
                        </div>
                    </Col>


                </Row>
            </Container>
        </>
    );
}
export default Question;
