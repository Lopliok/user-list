import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/reducer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,document.getElementById('root'));
registerServiceWorker();
