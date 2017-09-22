import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadCompras} from './actions/comprasActions';

const store = configureStore();
store.dispatch(loadCompras());


const WithProvider = () => (
		<Provider store={store}>
			<App/>
		</Provider>
	);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
