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
              <div class="form-group">
                <label for="formGroupExampleInput2">Digite seu login</label>
                <input type="text" class="form-control" id="login" placeholder="Login"/>
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Digite sua senha</label>
                <input type="text" class="form-control" id="senha" placeholder="Senha"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
