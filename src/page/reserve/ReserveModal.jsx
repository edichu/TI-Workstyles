import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

class ReserveModal extends React.Component {

    state = {};

    selectTimeSlot = (event) => {
        alert('selectTimeSlot: ' + event.target.id);
    }

    requestSeatReservation = () => {
        alert('reserveSeat');
    }

    render() {

        let elements = [];

        for (let i = 0; i < 24; i++) {
            let hour = '' + i;
            if (hour.length < 2) {
                hour = '0' + hour;
            }
            hour = hour + ':00H';

            let isFound = false;

            if (this.props.seatStatus.reservations) {
                for (const [index, element] of this.props.seatStatus.reservations.entries()) {
                    console.trace(index);
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
                                    <input type="checkbox" name="vehicle1" checked disabled />
                                </Col>
                            </Row>
                        );
                        isFound = true;

                        break;
                    }
                }
            }

            if (!isFound) {
                let id = 'slot_' + i;
                elements.push(
                    <Row key={i}>
                        <Col>
                            <div align="left">{hour}</div>
                        </Col>
                        <Col>
                            <div align="center">-avail-</div>
                        </Col>
                        <Col align="right" >
                            <input type="checkbox" id={id} onChange={this.selectTimeSlot} />
                        </Col>
                    </Row>
                );
            }
        }

        return (

            <Modal show={this.props.iShowModal} aria-labelledby="contained-modal-title-vcenter" onHide={this.props.closeModal}>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reserve {this.props.seatStatus.map}-{this.props.seatStatus.seat_name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        {elements}
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.requestSeatReservation}>Submit</Button>
                    <Button onClick={this.props.closeModal}>Close</Button>
                </Modal.Footer>

            </Modal>
        )

    }
}

export default ReserveModal;