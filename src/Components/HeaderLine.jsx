/* eslint-disable no-unused-vars */
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderLine = () => {
    return (
        <div className="lg:block hidden bg-red-600 h-8 w-full ">
            <div className="mx-48 text-white  flex ">
                <div className='border-l flex  border-gray-400 gap-4 p-2 border-r'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutubeSquare />
                    <FaWhatsapp />
                </div>


                <div className='border-gray-400 hidden lg:block p-1 border-r text-sm font-semibold flex-1'> <p>Call : 01975945863</p> </div>



                <div className='border-gray-400 flex items-center gap-2 px-4 p-1 border-r text-sm font-semibold'>
                    <FaUserCircle />
                    <Link to='/login' className='text-sm font-semibold'> Login / Register</Link>

                </div>
            </div>
        </div>
    );
};

export default HeaderLine;