import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy, faICursor, faChurch, faGamepad, faTachometerAlt, faLaptop, faLaptopCode, faLaptopMedical, faGripVertical, faIdBadge, faIdCard, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';

class SideBar extends React.Component {

  render() {
    return (
      <div className={classNames('sidebar', {'is-open': this.props.isOpen})}>
        <div className="sidebar-header">
          <a color="info" onClick={this.props.toggle} style={{color: '#fff'}}>&times;</a>
          <h3>Hello</h3>
        </div>
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
            <NavLink href="#" ><FontAwesomeIcon icon={faTachometerAlt} className="mr-2"/>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" ><FontAwesomeIcon icon={faLaptop} className="mr-2"/>Devices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" ><FontAwesomeIcon icon={faIdCard} className="mr-2"/>Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" ><FontAwesomeIcon icon={faUser} className="mr-2"/>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesomeIcon icon={faSignOutAlt} className="mr-2"/>Logout</NavLink>
            </NavItem>
          </Nav>
      </div>
    );
  }
}

export default SideBar;
