import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';

const ReserveModal = (props) => {
    
    return (
        
        <Modal show={props.iShowModal} aria-labelledby="contained-modal-title-vcenter" onHide={props.closeModal}>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>.col-xs-12 .col-md-8</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>.col-xs-6 .col-md-4</code>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.closeModal}>Close</Button>
            </Modal.Footer>
            
        </Modal>
    )
}

export default ReserveModal;