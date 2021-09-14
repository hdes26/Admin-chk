import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const divRoot = document.querySelector('#root');


ReactDOM.render(<Root/>, divRoot );

serviceWorkerRegistration.register();
