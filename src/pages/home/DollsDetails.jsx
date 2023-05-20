import { useLoaderData } from "react-router-dom";



const DollsDetails = () => {

    const data = useLoaderData();

    return (
        <div>
                <h2 className=" text-center mt-5 text-4xl font-semibold">{data[0].title} Toys</h2>
            {
                data[0].details.map((toy) =>
                    <div key={toy.id} className="card mt-5 card-side bg-base-100 shadow-xl">
                        <figure><img className="w-[15rem] h-[15rem]" src={toy.image} alt="Movie" /></figure>
                        <div className="card-body">
                            
                            <h2 className="card-title"> {toy.name}</h2>
                            <p>{toy.description}</p>
                            <button className="btn-red"> Buy Now</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DollsDetails;