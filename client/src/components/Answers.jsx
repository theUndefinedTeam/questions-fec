import React from 'react'
import HelpfulAnswer from './helpfulAnswer.jsx'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { format, formatRelative } from 'date-fns'
import ProductPhotos from './productPhotos.jsx';



const Answer = ({ answer }) => {
    // const answerHelpful = answer.helpfulness;
    return (
        <Container>
            <div className="gl-answer">
                {
                    `A:  ${answer.body}`
                }
                <div className="gl-answerInfo">

                    <Row>
                        <Col>
                            <Row >
                                {
                                    `by ${answer.answerer_name}, ${format(new Date(answer.date), 'MMMM dd, yyyy')},  report`// .concat(` ${answer.date}`) need to format
                                }
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <HelpfulAnswer helpfulBody={answer} />
                        </Col>
                        <Col xs={2}>

                        </Col>
                    </Row>
                </div>
                <Container>
                    <Row>
                        {answer.photos !== undefined
                            ? answer.photos.map((photos) => (
                                <ProductPhotos
                                    photos={photos}
                                    key={photos.id}
                                />
                            ))
                            : null}
                    </Row>
                </Container>
            </div>
        </Container>

    );
};
export default Answer;