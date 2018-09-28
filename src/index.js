import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom'

const WithRouter = ()=>{
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
};

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
