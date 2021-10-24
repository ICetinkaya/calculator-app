import React, { Component,Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Menu</Navbar.Brand>
                </Navbar>
            </Fragment>
        )
    }
}
