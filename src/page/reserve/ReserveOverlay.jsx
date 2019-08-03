import React from 'react';
import { Container, Row, Col, Popover } from 'react-bootstrap';

const ReserveOverlay = (props) => {

    if (props) {

        const elements = assembleElements(props);

        return (
            <Popover id="popover">
                <Container>
                    {elements}
                </Container>
            </Popover>
        )
    } else {
        // a return component is always needed in an overlay
        return <Popover />;
    }
}

const assembleElements = (props) => {

    let elements = [];

    for (let i = 0; i < 24; i++) {
        let hour = '' + i;
        if (hour.length < 2) {
            hour = '0' + hour;
        }
        hour = hour + ':00H';

        let isFound = false;

        if (props.reservations) {
            for (const [index, element] of props.reservations.entries()) {
                if (parseInt(element.time_slot) === i) {
                    elements.push(
                        <Row key={i}>
                            <Col>
                                <div align="left">{hour}</div>
                            </Col>
                            <Col>
                                <div align="right">{element.occupant}</div>
                            </Col>
                        </Row>
                    );
                    isFound = true;

                    break;
                }
            }
        }

        if (!isFound) {
            elements.push(
                <Row key={i}>
                    <Col>
                        <div align="left">{hour}</div>
                    </Col>
                    <Col>
                        <div align="center">-avail-</div>
                    </Col>
                </Row>
            );
        }
    }

    return elements;
}

export default ReserveOverlay;