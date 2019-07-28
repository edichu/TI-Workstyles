import React from 'react';
import ReservePage from './page/reserve/ReservePage';
import AdminPage from './page/admin/AdminPage';
import { ADMIN } from './Constants';


const PageSelector = (props) => {

    return (
        props.page === ADMIN ? <AdminPage /> : <ReservePage />
    )
}

export default PageSelector;