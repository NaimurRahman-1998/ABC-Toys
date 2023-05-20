import { FaTruck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Support = () => {
    return (
        <div className="lg:block hidden">
            <div className="bg-red-600 h-[7rem] flex justify-between mt-32">
                <div className="text-white flex items-center gap-5 border-zinc-100 border-r-2 mt-5 mb-4 flex-1 px-7 ">
                    <FaTruck className="w-[3rem] h-[3rem]" />
                    <div >
                        <h1 className="font-extrabold text-sm">FAST SHIPPING</h1>
                        <p className="text-sm mt-2">Within 3 Working Days</p>
                    </div>
                </div>
                <div className="text-white flex gap-5  items-center border-zinc-100 border-r-2 mt-5 mb-4 flex-1 px-7 ">
                    <FaDownload className="w-[3rem] h-[3rem]" />
                    <div >
                        <h1 className="font-extrabold text-sm">ONLINE PAYMENT</h1>
                        <p className="text-sm mt-2">Payment Methods</p>
                    </div>
                </div>
                <div className="text-white flex gap-5 items-center border-zinc-100 border-r-2 mt-5 mb-4 flex-1 px-7 ">
                    <FaPhoneAlt className="w-[3rem] h-[3rem]" />
                    <div >
                        <h1 className="font-extrabold text-sm">24/7 SUPPORT</h1>
                        <p className="text-sm mt-2">Unlimited Help Desk</p>
                    </div>
                </div>
                <div className="text-white flex gap-5 items-center border-zinc-100  mt-5 mb-4 flex-1 px-7 ">
                    <FaTruck className="w-[3rem] h-[3rem]" />
                    <div >
                        <h1 className="font-extrabold text-sm">ON TIME DELIVERY</h1>
                        <p className="text-sm mt-2">Fast Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;