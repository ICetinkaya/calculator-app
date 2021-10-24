import React, { Component,Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Footer</Navbar.Brand>
                </Navbar>
            </Fragment>
            
        )
    }
}
