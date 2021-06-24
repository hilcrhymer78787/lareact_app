import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Test1 from './pages/test1/index'
import Test2 from './pages/test2/index'
import Test3 from './pages/test3/index'
import User from './pages/user_/index'
import Place from './pages/place/index'


const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <ul className="hamburger">
                        <li className="hamburger_icn"></li>
                        <li className="hamburger_icn"></li>
                        <li className="hamburger_icn"></li>
                    </ul>
                    <div className="header">
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <img className="header_img" src="/assets/noimage.png"/>
                                <div className="header_left">
                                    <p>logintest3.name</p>
                                    <a href="/logout">ログアウト</a>
                                </div>
                            </div>
                            <div className="header_nav d-md-flex justify-content-center">
                                <Link to="/web/user">user</Link>
                                <Link to="/web/user_">user_</Link>
                                <Link to="/web/place">place</Link>
                                <Link to="/web/test1">test1</Link>
                                <Link to="/web/test2">test2</Link>
                                <Link to="/web/test3">test3</Link>
                            </div>
                        </div>
                    </div>
                    <div className="dammyHeader"></div>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/web/test1">
                            <Test1 />
                        </Route>
                        <Route path="/web/test2">
                            <Test2 />
                        </Route>
                        <Route path="/web/test3">
                            <Test3 />
                        </Route>
                        <Route path="/web/user">
                            <User />
                        </Route>
                        <Route path="/web/user_">
                            <User />
                        </Route>
                        <Route path="/web/place">
                            <Place />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div >
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('approot')
)