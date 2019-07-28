import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';

import ReservePopover from '../page/reserve/ReservePopover';

const Floor33 = (props) => {

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

            <OverlayTrigger trigger="hover" placement="right" overlay={ReservePopover()}>
                <circle
                    id="S1"
                    cx="125"
                    cy="85"
                    r="5"
                    onClick={props.selectSeat}
                />
            </OverlayTrigger>

            <OverlayTrigger trigger="hover" placement="right" overlay={ReservePopover()}>
                <circle
                    id="S2"
                    cx="60"
                    cy="85"
                    r="5"
                    onClick={props.selectSeat}
                />
            </OverlayTrigger>
            {/* <rect x="450" y="60" height="65" width="350" />
        
                    <rect x="650" y="150" height="350" width="125" onClick={this.modify} />
                    <rect x="425" y="550" height="125" width="350" onClick={this.modify} />
                    <rect x="25" y="700" height="125" width="350" onClick={this.modify} /> */}

        </svg>
    )
}

export default Floor33