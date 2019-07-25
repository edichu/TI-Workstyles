import React from 'react';
import ReservePage from './pages/reserve/ReservePage';
import AdminPage from './pages/admin/AdminPage';
import { ADMIN } from './Constants';


const PageSelector = (props) => {

    return (
        props.page === ADMIN ? <AdminPage /> : <ReservePage />
    )
}

export default PageSelector;