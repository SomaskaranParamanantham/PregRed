import React from 'react';
import Amplify from "aws-amplify";

import ReactDOM from 'react-dom';

import App from './app/App';

import './index.css';

Amplify.configure({
  API: {
    endpoints: [
        {
            name: "UTest7API",
            endpoint: "https://t6e2noaphk.execute-api.ap-southeast-1.amazonaws.com/dev",
            region: "ap-southeast-1"
        }
    ]
}
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
