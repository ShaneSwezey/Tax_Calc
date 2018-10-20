import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import yearReducer from './reducers/yearReducer';


const store = createStore(yearReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
