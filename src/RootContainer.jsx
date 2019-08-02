import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import PageStaticHeader from './PageStaticHeader';
import PageSelector from './PageSelector';


class RootContainer extends React.Component {

    render() {
        return (
            <Container fluid="true">
                <Row>
                    <Col>
                        <PageStaticHeader />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PageSelector
                            page={this.props.page}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

// We map the store's state here to "this.props" object.
const mapStateToProps = (state) => {
    return {
        // "page" key found here will be used as "this.props.page" in this component.
        page: state.pageSelectReducer.page
    };
}

export default connect(mapStateToProps)(RootContainer);