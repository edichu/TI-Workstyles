import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from './icons/telus-logo-header.gif';
import { adminPageAction, reservePageAction } from './redux/ActionCreators';


class PageStaticHeader extends React.Component {

    render() {
        return (

            <Navbar fixed="top" bg="light" style={{ boxShadow: '0 4px 8px -2px #a9a9a9' }}>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="140"
                        height="34"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <div style={{ borderLeft: '1px solid #e2e2e2', paddingLeft: '10px' }}>
                    <span className='logo-title' style={{ paddingRight: '40px' }}>
                        ADS Seat Reservation
                    </span>
                </div>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title={this.props.page} id="basic-nav-dropdown">
                            <NavDropdown.Item onSelect={this.props.selectAdminPage}>
                                Admin
                            </NavDropdown.Item>
                            <NavDropdown.Item onSelect={this.props.selectReservePage}>
                                Reserve
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login"><span className='fa fa-lock' /> Logout Edi Chua </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

// Maps Redux's store's state to "this.props[property]"
const mapStateToProps = (state) => {
    return {
        // "page" key here will be used as "this.props.page" in render.
        page: state.pageSelectReducer.page
    };
}

// Maps Redux's store's dispatch to "this.props.action"
const mapDispatchToProps = (dispatch) => {
    return {
        // Used as "this.props.selectAdminPage"
        selectAdminPage: () => dispatch(adminPageAction()),
        // Used as "this.props.selectReservePage"
        selectReservePage: () => dispatch(reservePageAction())
    }
}
// If "mapStateToProps" is not needed, pass null instead.
export default connect(mapStateToProps, mapDispatchToProps)(PageStaticHeader);