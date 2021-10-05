import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>

                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fav">Fav Watch</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
