import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Task from './pages/tasks/index'
import Search from './pages/search/index'
import User from './pages/user/index'


const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="header">
                    <div className="header_nav">
                        <Link to="/web/task">Task</Link>
                        <Link to="/web/search">Search</Link>
                        <Link to="/web/user">User</Link>
                    </div>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/web/search">
                            <Search />
                        </Route>
                        <Route path="/web/user">
                            <User />
                        </Route>
                        <Route path="/web/task">
                            <Task />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('approot')
)