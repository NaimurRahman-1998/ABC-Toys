/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/backgrond/background.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const UpdateToys = () => {

    const { user } = useContext(AuthContext);

    const loaderData = useLoaderData()
    // console.log(loaderData[0])
    const { Name, _id } = loaderData[0]

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value
        const quantity = form.quantity.value;
        const toyUrl = form.toyUrl.value
        const description = form.description.value
        const data = { price, quantity, toyUrl, description }
        console.log(data)

        const proceed = confirm('Are You Sure you want to Update?')
        if (proceed) {
            fetch(`https://abc-toys-server.vercel.app/allToys/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Updated Successfully')
                    }
                })
        }
    }

    return (
        <div>
            <div className="relative ">
                <img className="w-full h-[23rem] rounded-2xl mx-auto" src={img} alt="" />
                <div className="bg-gradient-to-r rounded-2xl from-[#151515] to-rgba(21, 21, 21, 0) w-[30rem] flex items-center inset-0 p-12 absolute  ">
                    <h1 className="text-4xl text-white font-extrabold">Update Your Toys</h1>
                </div>
            </div>
            <div className="bg-slate-200 h-[40rem] mt-11 py-10 px-60">
                <h1 className="text-4xl font-bold text-center">Update Your Toys</h1>
                <form onSubmit={() => handleUpdate(event)}>
                    <div className='flex justify-between'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Toy Name</span>
                            </label>
                            <input type="text" name='Name' value={Name} disabled className="input w-[20rem] input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Update Quantity" className="input w-[20rem] input-bordered" />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Update Your Price" className="input w-[20rem] input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">photo Url</span>
                            </label>
                            <input type="text" name='toyUrl' placeholder="Update Your Toy Photo" className="input w-[20rem] input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Update Your Description" className="input h-[10rem] input-bordered" />
                    </div>
                    <div className='flex justify-center'>
                        <div className="form-control mt-6 ">
                            <input className=" w-[10rem] btn-red" type="submit" value="Update Your Toy" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToys;