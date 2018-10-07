import React, { Component } from 'react';
import './Dashboard.css'
import 'font-awesome/css/font-awesome.min.css';
import Teams from './Teams'
import Music from './Music'
import Photos from './Photos'

class Dashboard extends Component{
  constructor(props) {
    super(props)
    this.state = {container: 'Teams'}
  }

  setStateContainer(container) {
    this.setState({ container })
  }
  render() {
    const { container } = this.state

    console.log(container)

    return (
    <div>
        <div className="header d-flex justify-content-center align-items-center">
            <span>XEJC</span>
        </div> 
        <div className="icon-menu">
          <div className="menu-teams" onClick= {() => this.setStateContainer('Teams')}>
            <i style={{ fontSize: 25 }} className="fa fa-align-justify"></i>            
          </div>
          <div className="menu-photos" onClick= {() => this.setStateContainer('Photos')}>
            <i style={{ fontSize: 25 }} className="fa fa-camera"></i>            
          </div>
          <div className="menu-music" onClick= {() => this.setStateContainer('Music')}>
            <i style={{ fontSize: 25 }} className="fa fa-music"></i>            
          </div> 
      </div>
      <div>
        { container === 'Teams' && <Teams /> }
        { container === 'Music' && <Music /> }
        { container === 'Photos' && <Photos /> }
      </div>
    </div>
    );
  }
}

export default Dashboard;
