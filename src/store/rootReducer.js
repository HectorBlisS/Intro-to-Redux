import {combineReducers} from 'redux';
import comprasReducer from '../reducers/comprasReducer';
import filtroReducer from '../reducers/filtroReducer';


const rootReducer = combineReducers({
	compras:comprasReducer,
	filtro:filtroReducer
});

export default rootReducer;