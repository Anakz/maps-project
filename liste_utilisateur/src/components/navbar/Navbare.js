import { Block } from '@material-ui/icons';
import React,{useState} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

function Navbare() {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >

            <Nav style={{backgroundColor:'black'}}>

                <NavbarBrand style={{marginLeft:'20px',color:'white'}} >LOGO</NavbarBrand>

                <NavItem>
                    <NavLink style={{color:'white'}} >Acceuil</NavLink>
                </NavItem>
            </Nav>

        </div>
  );
}

export default Navbare
