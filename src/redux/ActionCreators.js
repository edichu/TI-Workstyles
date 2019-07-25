import * as K from '../Constants';

export const adminPageAction = () => ({ type: K.PAGE_ADMIN_ACTION });
export const reservePageAction = () => ({ type: K.PAGE_RESERVE_ACTION });
export const selectDateAction = (date) => ({ type: K.SELECT_DATE_ACTION, selectedDate: date });