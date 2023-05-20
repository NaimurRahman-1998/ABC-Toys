/* eslint-disable no-unused-vars */
import Select from 'react-select';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import img from '../../assets/Banner/1.jpg'
import { AuthContext } from "../../provider/AuthProvider";
const AddToys = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://abc-toys-server.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Submitted Toy Successfully')
                }
            })
        console.log(data);
    }


    return (
        <div>
            <div className="relative ">
                <img className="w-full h-[23rem] rounded-2xl mx-auto" src={img} alt="" />
                <div className="bg-gradient-to-r rounded-2xl from-[#151515] to-rgba(21, 21, 21, 0) w-[30rem] flex items-center inset-0 p-12 absolute  ">
                    <h1 className="text-4xl text-white font-extrabold">Add Your Toys</h1>
                </div>
            </div>
            <div className="bg-slate-200 h-[40rem] mt-11 py-10 px-36">
                <h1 className="text-4xl font-bold text-center">Register Your Toys</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='grid grid-cols-2 gap-10 mt-6'>
                        <div>
                            <label className='text-2xl'>Toy Name : </label>
                            <input
                                className="h-[2.5rem] text-lg p-4 "
                                {...register("Name", { required: true })}
                                placeholder="Name"

                            />
                        </div>
                        <div>
                            <label className='text-2xl'>Toy Photo : </label>
                            <input
                                className="h-[2.5rem]  text-lg p-4 "
                                {...register("toyUrl", { required: true })}
                                placeholder="Url"
                                defaultValue="url"
                            />
                        </div>
                        <div>
                            <label className='text-2xl'>Seller Name : </label>
                            <input
                                className="h-[2.5rem]  text-lg p-4 "
                                {...register("SellerName", { required: true })}
                                placeholder={user && user.displayName}
                                type="text"
                            />
                        </div>
                        <div>
                            <label className='text-2xl'>Seller Email : </label>
                            <input
                                className="h-[2.5rem]  text-lg p-4 "
                                {...register("SellerEmail", { required: true })}
                                placeholder={user && user.email}
                                type="email"

                            />
                        </div>
                    </div>


                    <div className='flex justify-evenly mt-5'>
                        <div>
                            <label className='text-2xl'> SubCategory </label>
                            <select className="h-[2.5rem] w-[10rem] text-lg " {...register("SubCategory", { required: true })}>
                                <option value="Marvel">Marvel</option>
                                <option value="DC">DC</option>
                                <option value="Anime">Anime</option>
                                <option value="Barbie">Barbie</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-2xl' >Price</label>
                            <input
                                className="h-[2.5rem] w-[10rem] text-lg p-4 "
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                defaultValue=""
                            />
                        </div>
                        <div>
                            <label className='text-2xl'>Rating</label>
                            <select className="h-[2.5rem] w-[10rem] text-lg  " {...register("Rating", { required: true })}>
                                <option value="2star">2star</option>
                                <option value="3star">3star</option>
                                <option value="4star">4star</option>
                                <option value="5star">5star</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-2xl'>Quantity : </label>
                            <input
                                className="h-[2.5rem] w-[10rem] text-lg p-4 "
                                {...register("quantity")}
                                placeholder="Quantity"
                                type="number"
                            />
                        </div>
                    </div>




                    <div className='mt-6'>
                        <label className='text-2xl'>Description : </label>
                        <input
                            className="h-[10rem] w-full text-lg p-4 "
                            {...register("description")}
                            placeholder="description"
                        />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <input className="bg-red-500 rounded-full border-b-8 text-white hover:translate-y-2 hover:bg-red-600 duration-300 border-red-600 p-3" value="Submit Your Toy" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;