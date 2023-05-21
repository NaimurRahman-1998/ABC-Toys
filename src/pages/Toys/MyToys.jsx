/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { TabTitle } from "../../utilities/FunctionTitle";


const MyToys = () => {
    TabTitle('ABC | My-Toys')
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    
    const url = `https://abc-toys-server.vercel.app/allToys?email=${user.email}`

    const navigate = useNavigate()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = (id) => {
        const proceed = confirm('Want to Delete Your Toy?')
        if (proceed) {
            fetch(`https://abc-toys-server.vercel.app/allToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted Successfully')
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining)
                    }
                    console.log(data)
                })
        }

    }

    const handleUpdate = (id) => {
        const proceed = confirm('Do you want to update Your Toys?')
        if (proceed) {
            navigate(`/toys/updateToys/${id}`)
        } else {
            return
        }
    }


    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map((toy) =>
                                <tr key={toy._id}>
                                    <td><button onClick={() => handleDelete(toy._id)} className="bg-red-800 text-white rounded-full w-10 h-10 hover:bg-red-500">X</button></td>
                                    <td><img className="w-28 h-28 rounded-md" src={toy.toyUrl} alt="" /></td>
                                    <td>{toy.Name}</td>
                                    <td>{toy.SellerName}</td>
                                    <td>${toy.price}</td>
                                    <td><button onClick={() => handleUpdate(toy._id)} className="bg-red-500 rounded-full border-b-8 text-white hover:translate-y-2 hover:bg-red-600 duration-300 border-red-600 p-3">Update</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;