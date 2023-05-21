/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/Login/login.png'
import { AuthContext } from "../../provider/AuthProvider";
import { TabTitle } from "../../utilities/FunctionTitle";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    TabTitle('ABC | Login')
    const { login, googleLogin } = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;

        console.log(email, password)
        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(from)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Please Login</h1>
                        <form onSubmit={() => handleLogin(event)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {error && <p className='text-red-500'>{error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn-red" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to ABC Toys <Link className='text-red-400 font-bold' to="/signup">Sign Up</Link> </p>
                        <button onClick={handleGoogle} className="btn rounded-full bg-blue-500 w-12"><FaGoogle></FaGoogle></button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;