import img1 from '../assets/Banner/banner.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel h-[30rem] w-full">
            <img src={img1} alt="" />
            </div>

            <div className='text-center mt-10'>
                <h1 className='text-red-600  font-bold text-2xl'>Experience the Ultimate online toy shopping brought to you by ABC toys.</h1>
                <p className='mt-4 text-xl font-medium text-gray-400'>Official Distributor of Mattel, Funskool, Winfun, Frank & Zephyr Toy Brands in Bangladesh! <br />
Authorized Licensee of Hot Wheels & Barbie Apparel (2022)!</p>
<button className='mt-3 bg-red-500 rounded-full border-b-8 text-white hover:translate-y-2 hover:bg-red-600 duration-300 border-red-600 p-3'>Download Our App</button>
            </div>
        </div>
    );
};

export default Banner;