/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const AllToys = () => {
    const {user} = useContext(AuthContext)
    const [toys,setToys] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[user])

    const handleSearch=()=>{
        fetch(`http://localhost:5000/allToysByName/${searchText}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }
    return (
        <div className="">
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-2 bg-slate-200"
                    placeholder="Search By Toy Name"
                />
                <button className="btn-red ml-4" onClick={handleSearch}> Search</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full ">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) =>
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy.SellerName}</td>
                                    <td>{toy.Name}</td>
                                    <td>{toy.SubCategory}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity} piece</td>
                                    <td> <Link to={`/toys/${toy._id}`}><button className="bg-red-500 rounded-full border-b-8 text-white hover:translate-y-2 hover:bg-red-600 duration-300 border-red-600 p-3">View Details</button></Link> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;