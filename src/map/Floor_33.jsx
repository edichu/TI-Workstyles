import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';

import ReserveOverlay from '../page/reserve/ReserveOverlay';


class Floor33 extends React.Component {

    handleViewSeatStatus = (event) => {
        this.props.viewSeatStatus(event.target.id);
    }

    render() {

        return (
            <svg id="mysvg"
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="297"
                viewBox="0 0 210 297"
                preserveAspectRatio="xMidYMid meet"
            >
    
                <rect
                    id="rect3729"
                    width="9.0714283"
                    height="27.214285"
                    x="205.46428"
                    y="12.005952" />
                <rect
                    id="rect3741"
                    width="87.690468"
                    height="14.273809"
                    x="70.303574"
                    y="0" />
                <rect
                    id="rect3745"
                    width="33.261906"
                    height="30.148809"
                    x="15.119046"
                    y="0.75595236" />
                <rect
                    id="rect3768"
                    width="86.934525"
                    height="18.142857"
                    x="70.303574"
                    y="29.392859" />
                <rect
                    id="rect3774"
                    width="38.55357"
                    height="78.619049"
                    x="73.327377"
                    y="73.994049" alt="Edito" />
    
                <OverlayTrigger trigger="hover" placement="auto" delay={{ show: 100, hide: 300 }} overlay={ReserveOverlay(this.props.seatStatus)}>
                    <circle
                        id="S1"
                        cx="125"
                        cy="85"
                        r="5"
                        onClick={this.props.selectSeat}
                        onMouseEnter={this.handleViewSeatStatus}
                    />
                </OverlayTrigger>
    
                <OverlayTrigger trigger="hover" placement="auto" delay={{ show: 100, hide: 300 }} overlay={ReserveOverlay(this.props.seatStatus)}>
                    <circle
                        id="S2"
                        cx="60"
                        cy="85"
                        r="5"
                        onClick={this.props.selectSeat}
                        onMouseEnter={this.handleViewSeatStatus}
                    />
                </OverlayTrigger>
            </svg>
        )
    }
}

export default Floor33