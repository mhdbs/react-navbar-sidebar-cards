import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css"
class NavBar extends React.Component {

  constructor(props) {
    super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false
   };
 }

 toggle() {
   this.setState({
     isOpen: !this.state.isOpen  
   });
 }

  render(){
    return (
      <div>
      <Navbar color="light" light className="navbar shadow-sm p-2 mb-5 bg-white rounded" expand="md">
        <Button color="info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink href="#">page1</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page2</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page3</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#">page4</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="https://github.com/mhdbs" target="_blank">Github</NavLink>
           </NavItem>
        </Nav>
       </Collapse>
      </Navbar>
     
            <div className="im">
                <h1>Test</h1>
            </div>
        </div>
    );
  }
}

export default NavBar;
