

const MyToys = () => {
    
    return (
        <div className="">

        Welcome to Bookings
        

        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Price</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {/* {
                        toys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.SellerName}</td>
                                <td>{toy.Name}</td>
                                <td>{toy.SubCategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity} piece</td>
                                <td> <Link to={`/toys/${toy._id}`}><button className="btn">View Details</button></Link> </td>
                            </tr>
                        )
                    } */}
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default MyToys;