import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Main from '../components/Main';

import {Table} from 'antd'

function Guest() {
    return (
        <>
         <h2> Client PAGE</h2>

            <nav className="navbar navbar-expand-sm navbar bg-white">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link" to="/main"> Main</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"> </Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
            <div className="App" > 

            </div>
        </>
    );
}

export default Guest;