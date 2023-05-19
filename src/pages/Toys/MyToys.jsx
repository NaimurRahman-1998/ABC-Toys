/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/allToys?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = (id) => {
        const proceed = confirm('Want to Delete Your Toy?')
        if (proceed) {
            fetch(`http://localhost:5000/allToys/${id}`, {
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


    return (
        <div className="">
            Welcome to My Toys


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
                                    <td><button onClick={() => handleDelete(toy._id)} className="btn rounded-full">X</button></td>
                                    <td><img className="w-28 h-28 rounded-md" src={toy.toyUrl} alt="" /></td>
                                    <td>{toy.Name}</td>
                                    <td>{toy.SellerName}</td>
                                    <td>${toy.price}</td>
                                    <td><button className="btn">Update</button></td>
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