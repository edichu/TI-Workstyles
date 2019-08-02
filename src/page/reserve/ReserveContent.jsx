import React from 'react';
import { connect } from 'react-redux';

import ReserveModal from './ReserveModal';
import Floor33 from '../../map/Floor_33';

class ReserveContent extends React.Component {

    state = { iShowModal: false, seat: { seat_name: '' } };

    selectSeat = (e) => {
        // alert(e.target);
        // let e = document.getElementById("rect");
        // e.target.setAttributeNS(null, 'x', 850);
        // e.target.setAttributeNS(null, 'cx', 150);
        this.setState({ iShowModal: true });
        
    }

    viewSeatStatus = (id) => {
        const requestUrl = 'http://localhost:5000/seats/ADS/' + id + '/' + this.props.selectedDate.format('YYYY-MM-DD');

        fetch(requestUrl, {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            // console.log(JSON.stringify(json));
            this.setState({ seat: json });
        }).catch(function (err) {
            console.error(err);
        });
    }

    closeModal = () => {
        this.setState({ iShowModal: false });
    }

    render() {
        return (
            <div>
                <Floor33
                    selectSeat={this.selectSeat}
                    viewSeatStatus={this.viewSeatStatus}
                    seatStatus={this.state.seat}
                />

                <ReserveModal
                    iShowModal={this.state.iShowModal}
                    closeModal={this.closeModal}
                    seatStatus={this.state.seat}
                />
            </div>
        )
    }
}

// We map the store's state here to "this.props" object.
const mapStateToProps = (state) => {
    return {
        selectedDate: state.dateSelectReducer.selectedDate
    }
}

export default connect(mapStateToProps)(ReserveContent);