
import payments from '../assets/footer/payments.jpg'
import logo from '../assets/logo.jpg'
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer py-10 mt-16 text-base-content">
                <div>
                    <span className="f-title">Our Payment Methods :</span>
                    <img className='w-36' src={payments} alt="" />
                    <div className='space-y-4'>
                        <a href="https://www.facebook.com/"><FaFacebook className='w-12 h-6' /></a>
                        <FaTwitter  className='w-12 h-6'/>
                    </div>
                </div>
                <div className='space-y-3'>
                    <span className="f-title ">Our Pages</span>
                    <Link to="/"><a className="f-p link link-hover">Home Page</a></Link>
                    <Link to="/toys/allToys"><a className="f-p link link-hover">All Toys</a></Link>
                    <Link to='/toys/myToys'><a className="f-p link link-hover">My Toys</a></Link>
                    <Link to='/toys/addToys'><a className="f-p link link-hover">Add Toys</a></Link>
                    <Link to='/toys/myToys'><a className="f-p link link-hover">My Toys</a></Link>
                </div>
                <div className='space-y-3'>
                    <span className="f-title ">My Account</span>
                    <a className="f-p link link-hover">DashBoard</a>
                    <a className="f-p link link-hover">Orders</a>
                    <a className="f-p link link-hover">Download </a>
                    <a className="f-p link link-hover">Address</a>
                    <a className="f-p link link-hover">Logout</a>
                </div>
                <div>
                    <img className='w-24' src={logo} alt="" />
                    <h1 className='f-p'> Order YOur Favorite Toys Online With Us</h1>
                    <div className="mt-6 flex flex-col gap-2">
                        <div className='flex items-center gap-2'>
                            <FaLocationArrow /><span className='f-p'>House 05 8th Floor, Roads 20, Baridhara</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt /><span className='f-p'>018466262</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaMailBulk /><span className='f-p'>aaa@aaa.com</span>
                        </div>



                    </div>
                </div>
            </footer>
            <div className='border-t-2 lg:block hidden py-4'>
                <span className='f-title'>Abc Toys</span> <span className='f-p'>@ 2023 All Right Reserved. Develop bu Stripling</span>
            </div>
        </div>
    );
};

export default Footer;