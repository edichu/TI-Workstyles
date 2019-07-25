import React from 'react';
import ReserveModal from './ReserveModal';
import Floor33 from '../../maps/Floor_33';

class ReserveContent extends React.Component {

    state = { showModal: false };

    selectSeat = (e) => {
        // alert(e.target);
        // let e = document.getElementById("rect");
        // e.target.setAttributeNS(null, 'x', 850);
        // e.target.setAttributeNS(null, 'cx', 150);
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (

            <div>
                <Floor33
                    selectSeat={this.selectSeat}
                />

                <ReserveModal
                    open={this.state.showModal}
                    close={this.closeModal}
                />
            </div>

        )
    }
}

export default ReserveContent;