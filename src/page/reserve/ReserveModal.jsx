import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const ReserveModal = (props) => {

    let elements = assembleElements(props);
    
    return (
        
        <Modal show={props.iShowModal} aria-labelledby="contained-modal-title-vcenter" onHide={props.closeModal}>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.seatStatus.seat_name} Reservation
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    {elements}
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.closeModal}>Close</Button>
            </Modal.Footer>
            
        </Modal>
    )
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

        if (props.seatStatus.reservations) {
            for (const [index, element] of props.seatStatus.reservations.entries()) {
                if (parseInt(element.time_slot) === i) {
                    elements.push(
                        <Row key={i}>
                            <Col>
                                <div align="left">{hour}</div>
                            </Col>
                            <Col>
                                <div align="center">{element.occupant}</div>
                            </Col>
                            <Col align="right">
                                <input type="checkbox" name="vehicle1" checked disabled/>
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
                        <div align="center">-</div>
                    </Col>
                    <Col align="right">
                        <input type="checkbox" name="vehicle1" value="Bike" />
                    </Col>
                </Row>
            );
        }
    }

    return elements;
}

export default ReserveModal;