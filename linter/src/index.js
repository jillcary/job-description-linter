import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route>
            <Route path="/" component={App}/>
        </Route>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
