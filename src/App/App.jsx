import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import SideBar from '../components/sidebar/SideBar';
import Content from '../components/content/Content';
class App extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          isOpen: true
        }
      }
    
      toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
      }
  render() {
    return (
        <div className="Protectednav">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
         <Content toggle={this.toggle} isOpen={this.state.isOpen}/>
       </div>

    );
  }
}

export { App };









