import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { connect } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import DateBackwardWidget from './DateBackwardWidget';
import DateForwardWidget from './DateForwardWidget';
import { selectDateAction } from '../../redux/ActionCreators';


class Sidebar extends React.Component {

    state = { Forward: true, Back: false, dateNow: moment(Date.now()), offset: 0 };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ dateNow: moment(Date.now()) });
        }
            , 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleDateArrowClick = (e) => {
        let key = e.target.alt
        let offset = this.state.offset;
        const selectedDate = this.state.dateNow.clone();

        if(key === 'Forward') {
            ++offset;
        } else {
            --offset;
        }
        selectedDate.add(offset, 'day');
        this.props.selectDate(selectedDate);

        this.setState({ offset: offset });
    }

    render() {
        const offset = this.state.offset;
        let back = false;
        let forward = true;

        if(offset > 0) {
            back = true;

            if(offset > 6) {
                forward = false;
            }
        }

        return (
            <div style={{ paddingTop: '10px' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ textAlign: 'center' }}>{this.props.selectedDate.format('dddd')}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 style={{ textAlign: 'center' }}>{this.props.selectedDate.format('MMMM')}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 style={{ textAlign: 'center' }}>

                                <DateBackwardWidget
                                    isDateAvailable={back}
                                    handleDateClick={this.handleDateArrowClick}
                                    style={{ paddingTop: '8px' }}
                                />

                                {this.props.selectedDate.format(' DD ')}

                                <DateForwardWidget
                                    isDateAvailable={forward}
                                    handleDateClick={this.handleDateArrowClick}
                                    style={{ paddingTop: '8px' }}
                                />

                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 style={{ textAlign: 'center' }}>{this.props.selectedDate.format('YYYY')}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDate: state.dateSelectReducer.selectedDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectDate: (date) => dispatch(selectDateAction(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);