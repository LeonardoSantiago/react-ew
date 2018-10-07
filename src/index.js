import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Components/Dashboard'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
