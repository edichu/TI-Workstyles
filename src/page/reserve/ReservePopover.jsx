import React from 'react';
import { Container, Row, Col, Popover } from 'react-bootstrap';

const ReservePopover = (props) => {
    return (
        <Popover id="popover-basic" placement="auto-start" title="C1 Occupancy">
            <Container>
                <Row>
                    <Col>
                        <div align="right">
                            This is meant to test the width of a popover.
                        </div>
                        
                    </Col>
                    <Col>
                        <div align="center">-ing</div>
                        
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col>
                        1
                    </Col>
    
                    <Col>
                        1
                    </Col>
                </Row>
            </Container>
        </Popover>
    )
}

export default ReservePopover;
