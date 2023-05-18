/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/Category/1.jpg'
import img2 from '../../assets/Category/2.jpg'
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ShopByCategory = () => {
    const [value, setValue] = useState(2);
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categoryDolls')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    console.log(category[0]?.details[0].name)
    return (
        <div className="mt-28">
            <h1 className="text-3xl font-extrabold text-center text-red-500">Shop By Category</h1>

            <Tabs>
                <TabList>
                    {
                        category.map(doll => <Tab key={doll.id}>{doll.title}</Tab>)
                    }

                </TabList>

                {
                    category.map(doll =>
                        <TabPanel>
                            <div className='flex gap-8'>
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
                                                    <Link to={`/dollDetails/${doll?.details[0]?.id}`}> <button className='btn'>View Details</button></Link>
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
                                                    <Link to={`/dollDetails/${doll?.details[1]?.id}`}><button className='btn'>View Details</button></Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </TabPanel>)
                }

                {/* <TabPanel>
                    <div className='flex gap-8'>
                        <div className='flex'>
                            <div className='relative'>
                                <img className='w-[20rem] h-[20rem]'  alt="" />
                                <div className='bg-black rounded-xl duration-200 opacity-20 text-white  absolute inset-x-0 bottom-0 hover:opacity-80'>
                                    <div className='flex justify-between items-center px-5'>
                                        <div>
                                            <h1 className='font-bold text-xl'>Amazing Spider Man</h1>
                                            <p>price : $99.99</p>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Link> <button className='btn'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='flex'>
                            <div className='relative'>
                                <img className='w-[20rem] h-[20rem]'  alt="" />
                                <div className='bg-black rounded-xl opacity-20 text-white duration-200  absolute inset-x-0 bottom-0 hover:opacity-80'>
                                    <div className='flex justify-between items-center px-5'>
                                        <div>
                                            <h1 className='font-bold text-xl'>Captain Marvel</h1>
                                            <p>price : $99.99</p>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <button className='btn'>View Details</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </TabPanel> */}


            </Tabs>
        </div>
    );
};

export default ShopByCategory;