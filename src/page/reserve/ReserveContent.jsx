import React from 'react';
import ReserveModal from './ReserveModal';
import Floor33 from '../../map/Floor_33';

class ReserveContent extends React.Component {

    state = { iShowModal: false };

    selectSeat = (e) => {
        // alert(e.target);
        // let e = document.getElementById("rect");
        // e.target.setAttributeNS(null, 'x', 850);
        // e.target.setAttributeNS(null, 'cx', 150);
        this.setState({ iShowModal: true, seat: {} });
        
    }

    viewSeatStatus = (id) => {
        const requestUrl = 'http://localhost:5000/seats/ADS/' + id;

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
                />
            </div>

        )
    }
}

export default ReserveContent;