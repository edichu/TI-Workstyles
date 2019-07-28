import React from 'react';
import back_enabled from '../../icons/back_enabled.png';
import back_disabled from '../../icons/back_disabled.png';

const DateBackwardWidget = (props) => {

    return (

        props.isDateAvailable
            ?
            <input
                type="image"
                src={back_enabled}
                alt="Back"
                width="32"
                height="40"
                style={props.style}
                onClick={props.handleDateClick}
            />
            :
            <input
                type="image" src={back_disabled}
                alt="Back"
                width="32"
                height="40"
                style={props.style}
                disabled
            />
    )
}

export default DateBackwardWidget;