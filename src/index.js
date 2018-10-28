import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import yearReducer from './reducers/yearReducer';
import bracketReducer from './reducers/infoReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    year: yearReducer,
    bracket: bracketReducer
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
