/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import img from '../../assets/backgrond/background.jpg'
import Rating from '@mui/material/Rating';
import { TabTitle } from "../../utilities/FunctionTitle";

const ToyDetails = () => {
    TabTitle('ABC | Details')
    const loaderData = useLoaderData()
    console.log(loaderData[0])
    const { Name, toyUrl, SellerEmail, SellerName, SubCategory, description, price, quantity } = loaderData[0]
    return (
        <div>
            welcome to toy details
            <div className="relative ">
                <img className="w-full h-[23rem] rounded-2xl mx-auto" src={img} alt="" />
                <div className="bg-gradient-to-r rounded-2xl from-[#151515] to-rgba(21, 21, 21, 0) w-full flex items-center inset-0 p-12 absolute  ">
                    <h1 className="text-4xl text-white font-extrabold">Toy Details</h1>
                </div>
            </div>

            <div className=" w-full h-[25rem] flex mt-24 ">
                <div className="w-[40%]">
                    <img className="w-full h-full rounded-xl" src={toyUrl} alt="" />
                </div>
                <div className="w-[60%]">
                    <h1 className="text-center text-4xl font-semibold underline">{Name}</h1>
                    <div className="px-7 mt-7">
                        <div className="flex justify-between">
                            <h1 className="text-2xl">Seller Name : <span className="font-medium">{SellerName}</span> </h1>
                            <h1 className="text-2xl">Seller Email : <span className="font-medium">{SellerEmail}</span></h1>
                        </div>
                        <div className="flex justify-between mt-5">
                            <h1 className="text-2xl">Price : <span className="font-medium">{price}$</span> </h1>
                            <h1 className="text-2xl">Sub Category : <span className="font-medium">{SubCategory}</span></h1>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1 className="text-2xl"><Rating name="disabled" value={3} /></h1>
                            <h1 className="text-2xl mt-3">Available Quantity : <span className="font-medium">{quantity}</span></h1>
                        </div>
                        <p className="text-2xl mt-6">Description : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;