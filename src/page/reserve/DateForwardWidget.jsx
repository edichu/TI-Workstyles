import React from 'react';
import forward_enabled from '../../icons/forward_enabled.png';
import forward_disabled from '../../icons/forward_disabled.png';

const DateForwardWidget = (props) => {

    return (

        props.isDateAvailable
            ?
            <input
                type="image"
                src={forward_enabled}
                alt="Forward"
                width="32"
                height="40"
                style={props.style}
                onClick={props.handleDateClick}
            />
            :
            <input
                type="image" src={forward_disabled}
                alt="Forward"
                width="32"
                height="40"
                style={props.style}
                disabled
            />
    )
}

export default DateForwardWidget;