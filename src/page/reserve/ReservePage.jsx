import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Sidebar from './Sidebar';
import ReserveContent from './ReserveContent';

const ReservePage = () => {
    return (
        <div style={{ paddingTop: '40px' }}>
            <Container fluid="true">
                <Row>
                    <Col sm={2}>
                        <Sidebar />
                    </Col>

                    <Col>
                        <ReserveContent />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReservePage;