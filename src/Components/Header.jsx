import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
import { AuthContext } from "../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });

    }
    return (
        <div>
            <div className="navbar bg-slate-100 h-3 mt-2 border-t-2 border-b-4 mb-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>home</Link>
                            <Link to='/toys/addToys'>All Toys</Link>
                            <Link to='/login'>Login</Link>
                        </ul>
                    </div>
                    <Link className="flex items-center">
                        <img className="w-20 rounded-full" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal px-">
                        <div className="flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/toys/allToys'
                                className={({ isActive }) => (isActive ? "text-red-500" : "default")}
                            >
                                All Toys
                            </NavLink>
                            {
                                user && <NavLink to='/toys/addToys' className={({ isActive }) => (isActive ? "text-red-500" : "default")}>Add Toys</NavLink>
                            }
                            {
                                user && <NavLink to='/toys/myToys' className={({ isActive }) => (isActive ? "text-red-500" : "default")}>My Toys</NavLink>
                            }
                            <Link to='/blog'>Blog</Link>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img className="mr-5 w-14 h-14 rounded-full" src={user?.photoURL} alt="" data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName} />
                    }
                    <Tooltip id="my-tooltip" />
                    {user ? <button className="btn-red" onClick={handleLogout} >LogOut</button> : ""}
                </div>
            </div>
        </div>
    );
};

export default Header;