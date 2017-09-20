import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const WithProvider = () => (
		<Provider store={store}>
			<App/>
		</Provider>
	);

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
