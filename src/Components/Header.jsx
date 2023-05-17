import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jfif'
import { AuthContext } from "../provider/AuthProvider";

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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link>home</Link>
                        <Link>about</Link>
                        <Link>Login</Link>
                    </ul>
                </div>
                <Link className="flex items-center">
                    <img className="w-20" src={logo} alt="" />
                    <p>Grow more</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-">
                    <div className="flex gap-6">
                        <Link to="/">Home</Link>
                        <Link>All Toys</Link>
                        {
                            user && <Link to='' >Add Toys</Link>
                        }
                        {
                            user && <Link to='' >My Toys</Link>
                        }
                        <Link>Blog</Link>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <img src={user?.photoURL} alt="" />
                }
                { user ?  <button onClick={handleLogout} >LogOut</button> :  <Link to='/login'><button>login</button></Link>}
            </div>
        </div>
    );
};

export default Header;