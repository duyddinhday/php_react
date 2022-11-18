import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Edit from '../components/edit.js';

function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
         <h2> Admin PAGE</h2>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                     <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/edit/:id" element={<Edit />} />

                 

                </Routes>
            </div>
        </>
    );
}

export default Auth;