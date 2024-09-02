import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNav = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toogle = () => setIsOpen(!isOpen)
  return (
    <div className="custom-nav">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">Chat with Us</NavbarBrand>
        
        <NavbarToggler onClick={toogle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNav