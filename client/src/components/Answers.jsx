import React from 'react'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { format, formatRelative } from 'date-fns'



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
                        <Col xs={4}>
                            {
                                `by ${answer.answerer_name}, ${format(new Date(answer.date), 'MMMM dd, yyyy')}`// .concat(` ${answer.date}`) need to format
                            }
                        </Col>
                        <Col xs={4}>
                            {/* <HelpfulAnswer helpfulBody={answer} /> */}
                        </Col>
                        <Col xs={2}>
                            report
              </Col>
                    </Row>
                </div>
                <Container>
                    <Row>
                        {/* {answer.photos !== undefined
                ? answer.photos.map((photos) => (
                  <ProductPhotos
                    photos={photos}
                    key={photos.id}
                  />
                ))
                : null} */}
                    </Row>
                </Container>
            </div>
        </Container>

    );
};
export default Answer;