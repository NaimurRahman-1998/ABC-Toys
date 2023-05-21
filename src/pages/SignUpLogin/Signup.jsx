/* eslint-disable no-unused-vars */
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/Login/login.png'
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../provider/AuthProvider";
import { TabTitle } from "../../utilities/FunctionTitle";

const auth = getAuth(app)
const Signup = () => {
    const { createUser } = useContext(AuthContext)
    TabTitle('ABC | SignUp')
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value

        console.log(email, password, name, photo)
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                alert('Signed UP')
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
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
                        <h1 className="text-3xl text-center font-bold">SignUp</h1>
                        <form onSubmit={() => handleSignUp(event)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
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
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn-red" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already User <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;