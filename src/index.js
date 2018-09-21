import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Modal from 'react-modal'

Modal.setAppElement('#root')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
