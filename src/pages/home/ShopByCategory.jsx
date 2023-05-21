/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/Category/1.jpg'
import img2 from '../../assets/Category/2.jpg'
import Rating from '@mui/material/Rating';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { AuthContext } from '../../provider/AuthProvider';

const ShopByCategory = () => {
    const [value, setValue] = useState(2);
    const [category, setCategory] = useState([])

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://abc-toys-server.vercel.app/categoryDolls')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [user])

    const handleNavigate = (id) => {
        if (user) {
            navigate(`/dollDetails/${id}`)
        }
        else {
            alert('You Have to Login To View Details')
            navigate('/login')
        }
    }

    return (
        <div className="mt-28">
            <h1 className="fontTitle text-center font text-red-500 mb-4">Shop By Category</h1>

            <Tabs>
                <TabList className='flex gap-4 bg-red-500 h-10 lg:w-full font-bold justify-center'>
                    {
                        category.map(doll => <Tab key={doll._id}>{doll.title}</Tab>)
                    }

                </TabList>

                <div className='lg:flex flex justify-center mt-2'>
                    {
                        category.map(doll =>
                            <TabPanel key={doll._id}>
                                <div className='lg:flex gap-8'>
                                    <div className='flex'>
                                        <div className='relative'>
                                            <img className='w-[20rem] h-[20rem]' src={doll?.details[0]?.image} alt="" />
                                            <div className='bg-black rounded-xl duration-200 opacity-20 text-white  absolute inset-x-0 bottom-0 hover:opacity-80'>
                                                <div className='flex justify-between items-center px-5'>
                                                    <div>
                                                        <h1 className='font-bold text-xl'>{doll?.details[0]?.name}</h1>
                                                        <p>price :{doll?.details[0]?.price}</p>
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={value}

                                                        />
                                                    </div>
                                                    <div>
                                                        <button onClick={() => handleNavigate(doll._id)} className='btn'>View Details</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='flex'>
                                        <div className='relative'>
                                            <img className='w-[20rem] h-[20rem]' src={doll?.details[1]?.image} alt="" />
                                            <div className='bg-black rounded-xl opacity-20 text-white duration-200  absolute inset-x-0 bottom-0 hover:opacity-80'>
                                                <div className='flex justify-between items-center px-5'>
                                                    <div>
                                                        <h1 className='font-bold text-xl'>{doll?.details[1]?.name}</h1>
                                                        <p>price : {doll?.details[1]?.price}</p>
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={value}

                                                        />
                                                    </div>
                                                    <div>
                                                        <button onClick={() => handleNavigate(doll._id)} className='btn'>View Details</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </TabPanel>)
                    }
                </div>



            </Tabs>
        </div>
    );
};

export default ShopByCategory;