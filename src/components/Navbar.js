import React from 'react';
import styled from 'styled-components';

import { Search } from './Search';
import { NavDropdown } from 'react-bootstrap'

const Nav = styled.nav`
    background-color: #252827;
    color: withe;
`

export const Navbar = () => {



    return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img
                        alt=""
                        src="http://dev.thestreetstore.org/wp-content/uploads/2016/03/the-street-store-logo.png"
                        width="80" /></a>
                    <Search />
                    <NavDropdown title="Ordenar por:" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Mas recientes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action4">Menor precio</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action5">
                            Mayor precio
                        </NavDropdown.Item>
                    </NavDropdown>

                </div>
            </Nav>

        </div>
    )
}
