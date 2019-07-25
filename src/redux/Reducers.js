import moment from 'moment';
import * as K from '../Constants';

export function pageSelectReducer(state = { page: K.RESERVE }, action) {
    switch (action.type) {
        case K.PAGE_ADMIN_ACTION:
            return {
                page: K.ADMIN
            };
        case K.PAGE_RESERVE_ACTION:
            return {
                page: K.RESERVE
            }
        default:
            return state;
    }
}

export function dateSelectReducer(state = { selectedDate: moment(Date.now()) }, action) {
    switch(action.type) {
        case K.SELECT_DATE_ACTION:
            return {
                selectedDate: action.selectedDate
            }
        default:
            return state;
    }
}