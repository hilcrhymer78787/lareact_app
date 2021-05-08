import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
 
 
const App: React.FC = () => {
    return (
        <div>
            <Router />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('approot')
)