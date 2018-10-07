import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="login-container">
          <h1 className="App-title">XEJC</h1>
          <div>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="login" placeholder="Login"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="senha" placeholder="Senha"/>
              </div>
              <div className="button">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
