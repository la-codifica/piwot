import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import projectReducer from './store/reducers/project';
import PIReducer from './store/reducers/PI';
import sprintReducer from './store/reducers/sprint';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Combining feature specific reducers to form a rootReducer
const rootReducer = combineReducers({
    projects: projectReducer,
    PIs: PIReducer,
    sprints: sprintReducer 
});

// Main Redux store
const store = createStore(rootReducer);

// Provider hoc that passes on the store to the App
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

